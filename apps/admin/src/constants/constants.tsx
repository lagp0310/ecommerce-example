import {
  UserGroupIcon,
  BuildingStorefrontIcon,
  TagIcon,
  PhotoIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  ChartPieIcon,
  ShoppingCartIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

export const refineResources = [
  {
    name: "banner_types",
    list: "/admin/banner-types",
    create: "/admin/banner-types/create",
    edit: "/admin/banner-types/edit/:id",
    meta: {
      canDelete: true,
      label: "Banner Types",
      singularLabel: "Banner Type",
      groupName: "banners",
    },
  },
  {
    name: "businesses",
    list: "/admin/businesses",
    create: "/admin/businesses/create",
    edit: "/admin/businesses/edit/:id",
    meta: {
      canDelete: false,
      label: "Businesses",
      singularLabel: "Business",
      groupName: "admin",
    },
  },
  {
    name: "carts",
    list: "/admin/carts",
    meta: {
      canDelete: false,
      label: "Carts",
      singularLabel: "Cart",
      groupName: "selling",
    },
  },
  {
    name: "categories",
    list: "/admin/categories",
    create: "/admin/categories/create",
    edit: "/admin/categories/edit/:id",
    meta: {
      canDelete: true,
      label: "Categories",
      singularLabel: "Category",
      groupName: "categories",
    },
  },
  {
    name: "coupon_codes",
    list: "/admin/coupon-codes",
    create: "/admin/coupon-codes/create",
    edit: "/admin/coupon-codes/edit/:id",
    meta: {
      canDelete: true,
      label: "Coupon Codes",
      singularLabel: "Coupon Code",
      groupName: "stores",
    },
  },
  {
    name: "currencies",
    list: "/admin/currencies",
    create: "/admin/currencies/create",
    edit: "/admin/currencies/edit/:id",
    meta: {
      canDelete: false,
      label: "Currencies",
      singularLabel: "Currency",
      groupName: "admin",
    },
  },
  {
    name: "customers",
    list: "/admin/customers",
    create: "/admin/customers/create",
    edit: "/admin/customers/edit/:id",
    meta: {
      canDelete: true,
      label: "Customers",
      singularLabel: "Customer",
      groupName: "customers",
    },
  },
  {
    name: "header_banners",
    list: "/admin/store-header-banners",
    create: "/admin/store-header-banners/create",
    edit: "/admin/store-header-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Header Banners",
      singularLabel: "Header Banner",
      groupName: "banners",
    },
  },
  {
    name: "image_banners",
    list: "/admin/store-image-banners",
    create: "/admin/store-image-banners/create",
    edit: "/admin/store-image-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Image Banners",
      singularLabel: "Image Banner",
      groupName: "banners",
    },
  },
  {
    name: "locales",
    list: "/admin/locales",
    meta: {
      canDelete: false,
      label: "Locales",
      singularLabel: "Locale",
      groupName: "admin",
    },
  },
  {
    name: "offer_banners",
    list: "/admin/store-offer-banners",
    create: "/admin/store-offer-banners/create",
    edit: "/admin/store-offer-banners/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Offer Banners",
      singularLabel: "Offer Banner",
      groupName: "banners",
    },
  },
  {
    name: "orders",
    list: "/admin/orders",
    meta: {
      canDelete: false,
      label: "Orders",
      groupName: "selling",
    },
  },
  {
    name: "payments",
    list: "/admin/payments",
    meta: {
      canDelete: false,
      label: "Payments",
      singularLabel: "Payment",
      groupName: "payments",
    },
  },
  {
    name: "payment_methods",
    list: "/admin/payment-methods",
    create: "/admin/payment-methods/create",
    edit: "/admin/payment-methods/edit/:id",
    meta: {
      canDelete: true,
      label: "Payment Methods",
      singularLabel: "Payment Method",
      groupName: "payments",
    },
  },
  {
    name: "payment_method_types",
    list: "/admin/payment-method-types",
    create: "/admin/payment-method-types/create",
    edit: "/admin/payment-method-types/edit/:id",
    meta: {
      canDelete: false,
      label: "Payment Method Types",
      singularLabel: "Payment Method Type",
      groupName: "payments",
    },
  },
  {
    name: "products",
    list: "/admin/products",
    create: "/admin/products/create",
    edit: "/admin/products/edit/:id",
    meta: {
      canDelete: true,
      label: "Products",
      singularLabel: "Product",
      groupName: "products",
    },
  },
  {
    name: "product_tags",
    list: "/admin/product-tags",
    create: "/admin/product-tags/create",
    edit: "/admin/product-tags/edit/:id",
    meta: {
      canDelete: true,
      label: "Product Tags",
      singularLabel: "Product Tag",
      groupName: "products",
    },
  },
  {
    name: "stores",
    list: "/admin/stores",
    create: "/admin/stores/create",
    edit: "/admin/stores/edit/:id",
    meta: {
      canDelete: true,
      label: "Stores",
      singularLabel: "Store",
      groupName: "stores",
    },
  },
  {
    name: "store_features",
    list: "/admin/store-features",
    create: "/admin/store-features/create",
    edit: "/admin/store-features/edit/:id",
    meta: {
      canDelete: true,
      label: "Store Features",
      singularLabel: "Store Feature",
      groupName: "stores",
    },
  },
  {
    name: "tag_types",
    list: "/admin/tag-types",
    create: "/admin/tag-types/create",
    edit: "/admin/tag-types/edit/:id",
    meta: {
      canDelete: true,
      label: "Tag Types",
      singularLabel: "Tag Type",
      groupName: "products",
    },
  },
  {
    name: "transactions",
    list: "/admin/transactions",
    meta: {
      canDelete: false,
      label: "Transactions",
      singularLabel: "Transaction",
      groupName: "payments",
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
    url: "/admin/dashboard",
    icon: <ChartPieIcon className="size-4" />,
  },
];

export const sidebarItems = [
  {
    groupName: "banners",
    groupLabel: "Banners",
    groupIcon: <PhotoIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "banners"
    ),
  },
  {
    groupName: "categories",
    groupLabel: "Categories",
    groupIcon: <TagIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "categories"
    ),
  },
  {
    groupName: "customers",
    groupLabel: "Customers",
    groupIcon: <UserGroupIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "customers"
    ),
  },
  {
    groupName: "selling",
    groupLabel: "Selling",
    groupIcon: <ShoppingCartIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "selling"
    ),
  },
  {
    groupName: "payments",
    groupLabel: "Payments",
    groupIcon: <CreditCardIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "payments"
    ),
  },
  {
    groupName: "stores",
    groupLabel: "Stores",
    groupIcon: <BuildingStorefrontIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "stores"
    ),
  },
  {
    groupName: "products",
    groupLabel: "Products",
    groupIcon: <ShoppingBagIcon className="size-4" />,
    items: refineResources.filter(
      ({ meta: { groupName } }) => groupName === "products"
    ),
  },
  {
    groupName: "admin",
    groupLabel: "Administration",
    groupIcon: <Cog6ToothIcon className="size-4" />,
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
