export const refineResources = [
  {
    name: "banner_types",
    list: "/banner-types",
    create: "/banner-types/create",
    edit: "/banner-types/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "businesses",
    list: "/businesses",
    create: "/businesses/create",
    edit: "/businesses/edit/:id",
  },
  {
    name: "categories",
    list: "/categories",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "coupon_codes",
    list: "/coupon-codes",
    create: "/coupon-codes/create",
    edit: "/coupon-codes/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "currencies",
    list: "/currencies",
    create: "/currencies/create",
    edit: "/currencies/edit/:id",
  },
  {
    name: "customers",
    list: "/customers",
    create: "/customers/create",
    edit: "/customers/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "header_banners",
    list: "/store-header-banners",
    create: "/store-header-banners/create",
    edit: "/store-header-banners/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "image_banners",
    list: "/store-image-banners",
    create: "/store-image-banners/create",
    edit: "/store-image-banners/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "locales",
    list: "/locales",
    meta: {
      canDelete: false,
    },
  },
  {
    name: "offer_banners",
    list: "/store-offer-banners",
    create: "/store-offer-banners/create",
    edit: "/store-offer-banners/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "products",
    list: "/products",
    create: "/products/create",
    edit: "/products/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "stores",
    list: "/stores",
    create: "/stores/create",
    edit: "/stores/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "store_features",
    list: "/store-features",
    create: "/store-features/create",
    edit: "/store-features/edit/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "users",
    list: "/users",
    create: "/users/create",
    edit: "/users/edit/:id",
    meta: {
      canDelete: true,
    },
  },
];

export const formValidationMessages = {
  default: "There's an error in ${label}",
  required: "${label} is required",
  pattern: {
    mismatch: "${label} does not match the required pattern",
  },
};
