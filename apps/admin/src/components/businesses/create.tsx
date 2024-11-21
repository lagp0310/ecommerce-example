"use client";

import React from "react";
import { Create, SaveButton, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import isUUID from "validator/es/lib/isUUID";
import { useCreate, useCreateMany } from "@refinedev/core";

export const BusinessCreate = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    form: { getFieldsValue, validateFields },
  } = useForm();
  const { mutate: mutateBusinessCurrency } = useCreateMany({
    resource: "business_currency",
  });
  const { mutate: mutateBusiness } = useCreate({
    resource: "businesses",
    mutationOptions: {
      onSuccess: ({ data }) => {
        try {
          const { business_currencies } = getFieldsValue();
          const businessCurrenciesValues = business_currencies.map(
            (currencyId) => ({ business: data.id, currency: currencyId })
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
      const { errorFields } = await validateFields(["name", "description"]);

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
              validator(_rule, value, callback) {
                if (Array.isArray(value)) {
                  if (value.length === 0) {
                    callback("You must select at least a Currency");
                  }

                  if (value.some((currencyValue) => !isUUID(currencyValue))) {
                    callback("Currency should be an UUID");
                  }
                } else if (!isUUID(value)) {
                  callback("Currency should be an UUID");
                }
              },
            },
          ]}
        >
          <Select {...currencySelectProps} mode="multiple" />
        </Form.Item>
        <div className="flex flex-1 flex-row w-full justify-end">
          <SaveButton
            {...saveButtonProps}
            onClick={createBusiness}
            icon={<FolderArrowDownIcon className="h-4 w-4 text-white" />}
          />
        </div>
      </Form>
    </Create>
  );
};
