import { AuthProvider } from "@refinedev/core";
import { baseSupabaseClient } from "@/app/providers/data/dataProvider";

export const baseAuthProvider: AuthProvider = {
  login: async ({ email, password, providerName }) => {
    try {
      if (providerName) {
        const { data, error } = await baseSupabaseClient.auth.signInWithOAuth({
          provider: providerName,
        });

        if (error) {
          return {
            success: false,
            error,
          };
        }

        if (data?.url) {
          return {
            success: true,
          };
        }
      }

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
        return {
          success: true,
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
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
    const { error } = await baseSupabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    try {
      const { data } = await baseSupabaseClient.auth.getSession();
      const { session } = data;

      if (!session) {
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
