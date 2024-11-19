import { AuthPage } from "@refinedev/antd";

export default function LoginPage() {
  return (
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
  );
}
