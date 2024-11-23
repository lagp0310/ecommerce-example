import { AuthPage } from "@refinedev/antd";
import React from "react";

export default function LoginPage() {
  return (
    <React.Suspense>
      <AuthPage
        type="login"
        forgotPasswordLink={false}
        registerLink={false}
        formProps={{
          initialValues: {
            email: process.env.ECOMMERCE_ADMIN,
            password: process.env.ECOMMERCE_PASSWORD,
          },
        }}
      />
    </React.Suspense>
  );
}
