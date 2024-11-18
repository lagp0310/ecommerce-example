import { AuthPage } from "@refinedev/antd";
import { Link } from "@refinedev/core";

export default function ForgotPasswordPage() {
  return (
    <AuthPage
      type="forgotPassword"
      loginLink={
        <span className="flex flex-1 justify-end text-xs">
          Have an account?&nbsp;
          <Link to="/auth/login">
            <span className="text-blue-400 font-medium">Sign In</span>
          </Link>
        </span>
      }
    />
  );
}
