import {
  UserGroupIcon,
  BuildingStorefrontIcon,
  TagIcon,
  PhotoIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  ChartPieIcon,
} from "@heroicons/react/24/solid";

export const refineResources = [
  {
    name: "banner_types",
    list: "/banner-types",
    create: "/banner-types/create",
    edit: "/banner-types/edit/:id",
    meta: {
      canDelete: true,
      label: "Banner Types",
      groupName: "banners",
    },
  },
  {
    name: "businesses",
    list: "/businesses",
    create: "/businesses/create",
    edit: "/businesses/edit/:id",
    meta: {
      label: "Businesses",
      groupName: "admin",
    },
  },
  {
    name: "categories",
    list: "/categories",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    meta: {
      canDelete: true,
      label: "Categories",
      groupName: "categories",
    },
  },
  {
    name: "coupon_codes",
    list: "/coupon-codes",
    create: "/coupon-codes/create",
    edit: "/coupon-codes/edit/:id",
    meta: {
      canDelete: true,
      label: "Coupon Codes",
      groupName: "stores",
    },
  },
  {
    name: "currencies",
    list: "/currencies",
    create: "/currencies/create",
    edit: "/currencies/edit/:id",
    meta: {
      label: "Currencies",
      groupName: "admin",
    },
  },
  {
    name: "customers",
    list: "/customers",
    create: "/customers/create",
    edit: "/customers/edit/:id",
    meta: {
      canDelete: true,
      label: "Customers",
      groupName: "customers",
    },
  },
  {
    name: "header_banners",
    list: "/store-header-banners",
    create: "/store-header-banners/create",
    edit: "/store-header-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Header Banners",
      groupName: "banners",
    },
  },
  {
    name: "image_banners",
    list: "/store-image-banners",
    create: "/store-image-banners/create",
    edit: "/store-image-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Image Banners",
      groupName: "banners",
    },
  },
  {
    name: "locales",
    list: "/locales",
    meta: {
      canDelete: false,
      label: "Locales",
      groupName: "admin",
    },
  },
  {
    name: "offer_banners",
    list: "/store-offer-banners",
    create: "/store-offer-banners/create",
    edit: "/store-offer-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Offer Banners",
      groupName: "banners",
    },
  },
  {
    name: "products",
    list: "/products",
    create: "/products/create",
    edit: "/products/edit/:id",
    meta: {
      canDelete: true,
      label: "Products",
      groupName: "products",
    },
  },
  {
    name: "stores",
    list: "/stores",
    create: "/stores/create",
    edit: "/stores/edit/:id",
    meta: {
      canDelete: true,
      label: "Stores",
      groupName: "stores",
    },
  },
  {
    name: "store_features",
    list: "/store-features",
    create: "/store-features/create",
    edit: "/store-features/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Features",
      groupName: "stores",
    },
  },
  {
    name: "users",
    list: "/users",
    create: "/users/create",
    edit: "/users/edit/:id",
    meta: {
      canDelete: true,
      label: "Users",
      groupName: "admin",
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

export const topMainSidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: <ChartPieIcon className="h-4 w-4" />,
  },
];

export const sidebarItems = [
  {
    groupName: "banners",
    groupLabel: "Banners",
    groupIcon: <PhotoIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "banners"
    ),
  },
  {
    groupName: "categories",
    groupLabel: "Categories",
    groupIcon: <TagIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "categories"
    ),
  },
  {
    groupName: "customers",
    groupLabel: "Customers",
    groupIcon: <UserGroupIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "customers"
    ),
  },
  {
    groupName: "stores",
    groupLabel: "Stores",
    groupIcon: <BuildingStorefrontIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "stores"
    ),
  },
  {
    groupName: "products",
    groupLabel: "Products",
    groupIcon: <ShoppingBagIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "products"
    ),
  },
  {
    groupName: "admin",
    groupLabel: "Administration",
    groupIcon: <Cog6ToothIcon className="h-4 w-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "admin"
    ),
  },
];

export const nonProtectedPathnames = ["/auth"];

export const authLoginRoute = "/auth/login";
export const sessionCookieName = "supabase-session";
const cookieExpireDays = 30;
const cookieExpireHours = 24;
const cookieExpireMinutes = 60;
const cookieExpireSeconds = 60;
export const cookieExpiresAfter =
  cookieExpireDays *
  cookieExpireHours *
  cookieExpireMinutes *
  cookieExpireSeconds;
