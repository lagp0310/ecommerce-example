import { AuthPage } from "@refinedev/antd";

export default function LoginPage() {
  return (
    <AuthPage type="login" forgotPasswordLink={false} registerLink={false} />
  );
}
