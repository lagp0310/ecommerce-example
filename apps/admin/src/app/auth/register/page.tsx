import { AuthPage } from "@refinedev/antd";
import { Link } from "@refinedev/core";

export default function RegisterPage() {
  return (
    <AuthPage
      type="register"
      loginLink={
        <span className="text-xs flex flex-1 justify-end">
          Have an account?&nbsp;
          <Link to="/auth/login">
            <span className="text-blue-400 font-medium">Sign In</span>
          </Link>
        </span>
      }
    />
  );
}
