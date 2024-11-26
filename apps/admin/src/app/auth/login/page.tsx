import { AuthPage } from "@refinedev/antd";
import React from "react";

export default function LoginPage() {
  const email = process.env.ECOMMERCE_ADMIN ?? "dihiw99962@merotx.com";
  const password = process.env.ECOMMERCE_PASSWORD ?? "A$RK-ERYBLBn2ir";

  return (
    <React.Suspense>
      <AuthPage
        type="login"
        forgotPasswordLink={false}
        registerLink={false}
        title={<h1>Ecommerce Admin</h1>}
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
