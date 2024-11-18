"use client";

import React from "react";
import { Create, SaveButton, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import { useCreate } from "@refinedev/core";

export const CustomerCreate = () => {
  const {
    formProps,
    saveButtonProps,
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

      if (Array.isArray(errorFields) && errorFields.length > 0)
        throw new Error("Form is invalid");

      const { email, phone_number, ...rest } = getFieldsValue();
      mutateCustomer({ values: { ...rest } });
    } catch (error) {
      console.error(error);
    }
  }, [getFieldsValue, mutateCustomer, validateFields]);

  return (
    <Create footerButtons={[]}>
      <Form {...formProps} layout="vertical" onSubmitCapture={createCustomer}>
        <div className="flex flex-1 flex-row gap-x-4 w-full">
          <Form.Item
            label="First Name"
            name={["first_name"]}
            rules={[
              {
                required: true,
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
              },
            ]}
            className="flex-1"
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          label="Birth Date"
          name={["birth_date"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <SaveButton {...saveButtonProps} onClick={createCustomer} />
      </Form>
    </Create>
  );
};
