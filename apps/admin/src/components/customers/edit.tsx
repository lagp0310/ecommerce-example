"use client";

import React from "react";
import { Edit, SaveButton, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import { HttpError, useUpdate } from "@refinedev/core";
import { PatternFormat } from "react-number-format";
import dayjs from "dayjs";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { Customer, FormValues, ValidateFieldsResponse } from "@/types/types";

export const CustomerEdit = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    query,
    form: { getFieldsValue, setFieldValue, validateFields },
  } = useForm<Customer, HttpError, FormValues<Customer>>({
    queryMeta: { select: "*, emails(email), phone_numbers(phone_number)" },
  });

  const customersData = React.useMemo(
    () => query?.data?.data,
    [query?.data?.data]
  );
  React.useEffect(() => {
    if (!!customersData) {
      setFieldValue("email", customersData?.emails?.at(0)?.email);
      setFieldValue(
        "phone_number",
        customersData?.phone_numbers?.at(0)?.phone_number
      );
    }
  }, [customersData, setFieldValue]);

  const { mutate: mutateCustomer } = useUpdate({
    resource: "customers",
  });

  const updateCustomer = React.useCallback(async () => {
    try {
      const { errorFields } =
        (await validateFields()) as unknown as ValidateFieldsResponse<Customer>;

      if (Array.isArray(errorFields) && errorFields.length > 0) {
        throw new Error("Form is invalid");
      }

      const { ...formValues } = getFieldsValue([
        "first_name",
        "last_name",
        "birth_date",
        "billing_address",
        "shipping_address",
      ]);
      mutateCustomer({ values: { ...formValues } });

      redirect("list");
    } catch (error) {
      console.error(error);
    }
  }, [getFieldsValue, mutateCustomer, redirect, validateFields]);

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
        <div className="flex flex-1 flex-col md:flex-row gap-x-4 w-full">
          <Form.Item
            label="First Name"
            name={["first_name"]}
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[a-zA-Z]+$/),
                max: 50,
              },
            ]}
            className="flex-1"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={["last_name"]}
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[a-zA-Z]+$/),
                max: 50,
              },
            ]}
            className="flex-1"
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-x-4 w-full">
          <Form.Item
            label="Email"
            name={["email"]}
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                max: 50,
              },
            ]}
            className="flex-1"
          >
            <Input disabled readOnly />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={["phone_number"]}
            rules={[
              {
                required: true,
                pattern: new RegExp(/[0-9]{3}\-[0-9]{3}\-[0-9]{4}/),
                max: 12,
              },
            ]}
            className="flex-1"
          >
            <PatternFormat
              format="###-###-####"
              valueIsNumericString
              customInput={Input}
              disabled
              readOnly
            />
          </Form.Item>
        </div>
        <Form.Item
          label="Birth Date"
          name={["birth_date"]}
          rules={[
            {
              required: false,
              validator(_, value) {
                if (!value) return Promise.resolve();

                const isValid = dayjs(value).isValid();
                if (!isValid) {
                  return Promise.reject(new Error("Date is not valid"));
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <DatePicker format="MM-DD-YYYY" className="w-full" />
        </Form.Item>
        <Form.Item
          label="Billing Address"
          name={"billing_address"}
          rules={[
            {
              required: true,
              max: 500,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Shipping Address"
          name={"shipping_address"}
          rules={[
            {
              required: true,
              max: 500,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <div className="flex flex-1 flex-row w-full justify-end">
          <SaveButton
            {...saveButtonProps}
            onClick={updateCustomer}
            icon={<FolderArrowDownIcon className="h-4 w-4 text-white" />}
          />
        </div>
      </Form>
    </Edit>
  );
};
