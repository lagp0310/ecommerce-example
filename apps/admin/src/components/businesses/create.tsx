"use client";

import React from "react";
import { Create, SaveButton, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import isUUID from "validator/es/lib/isUUID";
import { HttpError, useCreate, useCreateMany } from "@refinedev/core";
import { ValidateFieldsResponse, Business, FormValues } from "@/types/types";

export const BusinessCreate = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    form: { getFieldsValue, validateFields },
  } = useForm<Business, HttpError, FormValues<Business>>();
  const { mutate: mutateBusinessCurrency } = useCreateMany({
    resource: "business_currency",
  });
  const { mutate: mutateBusiness } = useCreate({
    resource: "businesses",
    mutationOptions: {
      onSuccess: ({ data }) => {
        try {
          const { business_currencies } = getFieldsValue([
            "business_currencies",
          ]);
          const businessCurrenciesValues = business_currencies.map(
            (currencyId: string) => ({
              business: data.id,
              currency: currencyId,
            })
          );
          mutateBusinessCurrency({ values: businessCurrenciesValues });
        } catch (error) {
          console.error(error);
        }
      },
    },
  });

  const createBusiness = React.useCallback(async () => {
    try {
      const { errorFields } = (await validateFields([
        "name",
        "description",
      ])) as unknown as ValidateFieldsResponse<Business>;

      if (Array.isArray(errorFields) && errorFields.length > 0) {
        throw new Error("Form is invalid");
      }

      const { business_currencies, ...rest } = getFieldsValue();
      if (
        !business_currencies ||
        (Array.isArray(business_currencies) && business_currencies.length === 0)
      ) {
        throw new Error("You must select at least a Currency");
      }

      mutateBusiness({ values: { ...rest } });

      redirect("list");
    } catch (error) {
      console.error(error);
    }
  }, [getFieldsValue, mutateBusiness, redirect, validateFields]);

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    optionLabel: (item) => `${item.name} (${item.three_letter_code})`,
  });

  return (
    <Create footerButtons={[]}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name={["name"]}
          rules={[
            {
              required: true,
              max: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[
            {
              required: false,
              max: 500,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Currencies"
          name="business_currencies"
          rules={[
            {
              required: true,
              validator(_, value) {
                if (Array.isArray(value)) {
                  if (value.length === 0) {
                    return Promise.reject(
                      new Error("You must select at least a Currency")
                    );
                  }

                  if (value.some((currencyValue) => !isUUID(currencyValue))) {
                    return Promise.reject(
                      new Error("Currency should be an UUID")
                    );
                  }
                } else if (!isUUID(value)) {
                  return Promise.reject(
                    new Error("Currency should be an UUID")
                  );
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Select {...currencySelectProps} mode="multiple" />
        </Form.Item>
        <div className="flex w-full flex-1 flex-row justify-end">
          <SaveButton
            {...saveButtonProps}
            onClick={createBusiness}
            icon={<FolderArrowDownIcon className="size-4 text-white" />}
          />
        </div>
      </Form>
    </Create>
  );
};
