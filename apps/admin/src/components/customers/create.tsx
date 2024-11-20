"use client";

import React from "react";
import { Create, SaveButton, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import { useCreate } from "@refinedev/core";
import { PatternFormat } from "react-number-format";
import dayjs from "dayjs";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const CustomerCreate = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    form: { getFieldsValue, validateFields },
  } = useForm();
  const { mutate: mutateCustomer } = useCreate({
    resource: "customers",
    mutationOptions: {
      onSuccess: ({ data }) => {
        try {
          const { email, phone_number } = getFieldsValue();

          mutateEmail({ values: { email, customer: data.id } });
          mutatePhoneNumber({
            values: { phone_number, customer: data.id },
          });
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
  const { mutate: mutateEmail } = useCreate({ resource: "emails" });
  const { mutate: mutatePhoneNumber } = useCreate({
    resource: "phone_numbers",
  });

  const createCustomer = React.useCallback(async () => {
    try {
      const { errorFields } = await validateFields();

      if (Array.isArray(errorFields) && errorFields.length > 0) {
        throw new Error("Form is invalid");
      }

      const { email, phone_number, ...rest } = getFieldsValue();
      mutateCustomer({ values: { ...rest } });

      redirect("list");
    } catch (error) {
      console.error(error);
    }
  }, [getFieldsValue, mutateCustomer, redirect, validateFields]);

  return (
    <Create footerButtons={[]}>
      <Form {...formProps} layout="vertical">
        <div className="flex flex-1 flex-row gap-x-4 w-full">
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
        <div className="flex flex-1 flex-row gap-x-4 w-full">
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
            <Input />
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
            />
          </Form.Item>
        </div>
        <Form.Item
          label="Birth Date"
          name={["birth_date"]}
          rules={[
            {
              required: false,
              validator: (_rule, value, callback) => {
                if (!value) return;

                const isValid = dayjs(value).isValid();
                if (!isValid) callback("Date is not valid");
              },
            },
          ]}
        >
          <DatePicker format="MM-DD-YYYY" />
        </Form.Item>
        <div className="flex flex-1 flex-row w-full justify-end">
          <SaveButton
            {...saveButtonProps}
            onClick={createCustomer}
            icon={<FolderArrowDownIcon className="h-4 w-4 text-white" />}
          />
        </div>
      </Form>
    </Create>
  );
};
