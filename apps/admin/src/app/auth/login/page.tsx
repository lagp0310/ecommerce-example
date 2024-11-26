import { AuthPage } from "@refinedev/antd";
import React from "react";

export default function LoginPage() {
  const email = process.env.ECOMMERCE_ADMIN ?? "admin@ecommerce.com";
  const password = process.env.ECOMMERCE_PASSWORD ?? "A$RK-ERYBLBn2ir";

  return (
    <React.Suspense>
      <AuthPage
        type="login"
        forgotPasswordLink={false}
        registerLink={false}
        formProps={{
          initialValues: {
            email,
            password,
          },
        }}
      />
    </React.Suspense>
  );
}
