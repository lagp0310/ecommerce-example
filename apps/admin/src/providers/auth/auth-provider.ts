import { type AuthProvider } from "@refinedev/core";
import { baseSupabaseClient } from "@/providers/data/data-provider";
import nookies from "nookies";
import { cookieExpiresAfter, sessionCookieName } from "@/constants/constants";

export const baseAuthProvider: AuthProvider = {
  login: async ({ email, password, remember }) => {
    try {
      const searchParams =
        typeof window !== undefined
          ? new URLSearchParams(window.location.search)
          : null;
      const { data, error } = await baseSupabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data?.user) {
        nookies.set(null, sessionCookieName, JSON.stringify(data.session), {
          maxAge: !remember ? cookieExpiresAfter : undefined,
          path: "/",
        });

        return {
          success: true,
          redirectTo: searchParams?.get("redirectTo") ?? "/admin/dashboard",
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return {
        success: false,
        error,
        redirectTo: "/login",
      };
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Invalid email or password",
      },
    };
  },
  register: async () => {
    throw new Error("Not implemented");
  },
  forgotPassword: async () => {
    throw new Error("Not implemented");
  },
  updatePassword: async () => {
    throw new Error("Not implemented");
  },
  logout: async () => {
    try {
      const { error } = await baseSupabaseClient.auth.signOut();

      if (error) {
        return {
          success: false,
          error,
        };
      }

      nookies.destroy(null, sessionCookieName);
    } catch (error) {
      console.error(error);
    }

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      const {
        data: { user },
      } = await baseSupabaseClient.auth.getUser();

      if (!user) {
        return {
          authenticated: false,
          error: {
            message: "Check failed",
            name: "Session not found",
          },
          logout: true,
          redirectTo: "/login",
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return {
        authenticated: false,
        error: error || {
          message: "Check failed",
          name: "Session not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  },
  getPermissions: async () => {
    const user = await baseSupabaseClient.auth.getUser();

    if (user) {
      return user.data.user?.role;
    }

    return null;
  },
};
