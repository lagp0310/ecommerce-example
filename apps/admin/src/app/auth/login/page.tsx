import { AuthPage } from "@refinedev/antd";
import { Link } from "@refinedev/core";

export default function LoginPage() {
  return (
    <AuthPage
      type="login"
      forgotPasswordLink={
        <span className="text-xs">
          <Link to="/auth/forgot-password">
            <span className="text-blue-400 font-medium">Forgot Password?</span>
          </Link>
        </span>
      }
      registerLink={
        <span className="text-xs">
          Don’t have an account?{" "}
          <Link to="/auth/register">
            <span className="text-blue-400 font-medium">Sign up</span>
          </Link>
        </span>
      }
    />
  );
}
