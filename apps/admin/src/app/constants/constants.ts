export const refineResources = [
  {
    name: "customers",
    list: "/customers",
    create: "/customers/create",
    edit: "/customers/edit/:id",
    meta: { canDelete: true },
  },
  {
    name: "users",
    list: "/users",
    create: "/users/create",
    edit: "/users/edit/:id",
    meta: { canDelete: true },
  },
];
