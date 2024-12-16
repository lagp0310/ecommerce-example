"use client";

import React from "react";
import { baseSupabaseClient } from "@/providers/data/data-provider";

export type UserData = Partial<
  Awaited<ReturnType<typeof baseSupabaseClient.auth.getUser>>["data"]["user"]
> &
  ({ avatar?: string; firstName?: string; lastName?: string } | null);

type UserContext = {
  usersData: UserData;
};
const UserContext = React.createContext<UserContext>({
  usersData: null,
});

export function useCurrentUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error(
      "useCurrentUser must be used within a UserContextProvider."
    );
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  currentUser?: UserData;
};

export function UserContextProvider({ children, currentUser = null }: Props) {
  const [usersData, setUsersData] = React.useState(currentUser);

  const getUsersData = React.useCallback(
    async () => await baseSupabaseClient.auth.getUser(),
    []
  );
  React.useEffect(() => {
    getUsersData()
      .then(({ data }) => {
        if (!!data?.user) {
          const {
            id,
            email,
            phone,
            role,
            last_sign_in_at,
            user_metadata: { first_name: firstName, last_name: lastName },
          } = data?.user;

          setUsersData({
            id,
            firstName,
            lastName,
            email,
            phone,
            role,
            last_sign_in_at,
          });
        }
      })
      .catch((error) => console.error(error));
  }, [getUsersData]);

  const providerValue = React.useMemo(() => ({ usersData }), [usersData]);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
