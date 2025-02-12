"use client";

import React from "react";
import { Edit, SaveButton, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import {
  HttpError,
  useCreateMany,
  useDeleteMany,
  useUpdate,
} from "@refinedev/core";
import isUUID from "validator/es/lib/isUUID";
import { ValidateFieldsResponse, Business, FormValues } from "@/types/types";

export const BusinessEdit = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    query,
    form: { getFieldsValue, setFieldValue, validateFields },
  } = useForm<Business, HttpError, FormValues<Business>>({
    queryMeta: {
      select: "*, business_currency(id, currency(id, name, three_letter_code))",
    },
  });

  const businessData = React.useMemo(
    () => query?.data?.data,
    [query?.data?.data]
  );
  React.useEffect(() => {
    if (!!businessData) {
      setFieldValue(
        "business_currencies",
        businessData?.business_currency?.map(({ currency: { id } }) => id)
      );
    }
  }, [businessData, setFieldValue]);

  const { mutate: deleteBusinessCurrency } = useDeleteMany();
  const { mutate: mutateBusinessCurrency } = useCreateMany({
    resource: "business_currency",
  });
  const { mutate: mutateBusiness } = useUpdate({
    resource: "businesses",
    id: businessData?.id,
    mutationOptions: {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: ({ data }) => {
        const { business_currencies: selectedCurrencies } = getFieldsValue();
        const currentCurrencies = businessData?.business_currency?.map(
          ({ id, currency: { id: currencyId } }) => ({ id, currencyId })
        );

        const newCurrencies = selectedCurrencies
          .filter(
            (selectedCurrencyId) =>
              !currentCurrencies?.find(
                ({ currencyId }) => selectedCurrencyId === currencyId
              )
          )
          .map((currencyId) => ({ business: data.id, currency: currencyId }));
        const deleteCurrenciesIds = currentCurrencies
          ?.filter(
            ({ currencyId }) =>
              !selectedCurrencies.find(
                (selectedCurrencyId) => selectedCurrencyId === currencyId
              )
          )
          .map(({ id }) => id);

        const hasNewCurrencies =
          Array.isArray(newCurrencies) && newCurrencies.length > 0;
        const hasCurrenciesToBeDeleted =
          Array.isArray(deleteCurrenciesIds) && deleteCurrenciesIds.length > 0;
        if (hasNewCurrencies) {
          mutateBusinessCurrency({ values: newCurrencies });
        }
        if (hasCurrenciesToBeDeleted) {
          deleteBusinessCurrency({
            resource: "business_currency",
            ids: deleteCurrenciesIds,
          });
        }
      },
    },
  });

  const updateBusiness = React.useCallback(async () => {
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
    <Edit footerButtons={[]}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="ID"
          name={["id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly disabled />
        </Form.Item>
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
      </Form>
      <div className="flex w-full flex-1 flex-row justify-end">
        <SaveButton
          {...saveButtonProps}
          onClick={updateBusiness}
          icon={<FolderArrowDownIcon className="size-4 text-white" />}
        />
      </div>
    </Edit>
  );
};
