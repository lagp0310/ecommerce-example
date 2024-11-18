import {
  BeakerIcon,
  CurrencyDollarIcon,
  UsersIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  TagIcon,
  LanguageIcon,
  PhotoIcon,
  PercentBadgeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

export const refineResources = [
  {
    name: "banner_types",
    list: "/banner-types",
    create: "/banner-types/create",
    edit: "/banner-types/edit/:id",
    meta: {
      canDelete: true,
      icon: <PhotoIcon className="h-4 w-4" />,
    },
  },
  {
    name: "businesses",
    list: "/businesses",
    create: "/businesses/create",
    edit: "/businesses/edit/:id",
    meta: {
      icon: <BuildingOfficeIcon className="h-4 w-4" />,
    },
  },
  {
    name: "categories",
    list: "/categories",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    meta: {
      canDelete: true,
      icon: <TagIcon className="h-4 w-4" />,
    },
  },
  {
    name: "coupon_codes",
    list: "/coupon-codes",
    create: "/coupon-codes/create",
    edit: "/coupon-codes/edit/:id",
    meta: {
      canDelete: true,
      icon: <PercentBadgeIcon className="h-4 w-4" />,
    },
  },
  {
    name: "currencies",
    list: "/currencies",
    create: "/currencies/create",
    edit: "/currencies/edit/:id",
    meta: {
      icon: <CurrencyDollarIcon className="h-4 w-4" />,
    },
  },
  {
    name: "customers",
    list: "/customers",
    create: "/customers/create",
    edit: "/customers/edit/:id",
    meta: {
      canDelete: true,
      icon: <UserGroupIcon className="h-4 w-4" />,
    },
  },
  {
    name: "header_banners",
    list: "/store-header-banners",
    create: "/store-header-banners/create",
    edit: "/store-header-banners/edit/:id",
    meta: {
      canDelete: true,
      icon: <PhotoIcon className="h-4 w-4" />,
    },
  },
  {
    name: "image_banners",
    list: "/store-image-banners",
    create: "/store-image-banners/create",
    edit: "/store-image-banners/edit/:id",
    meta: {
      canDelete: true,
      icon: <PhotoIcon className="h-4 w-4" />,
    },
  },
  {
    name: "locales",
    list: "/locales",
    meta: {
      canDelete: false,
      icon: <LanguageIcon className="h-4 w-4" />,
    },
  },
  {
    name: "offer_banners",
    list: "/store-offer-banners",
    create: "/store-offer-banners/create",
    edit: "/store-offer-banners/edit/:id",
    meta: {
      canDelete: true,
      icon: <PhotoIcon className="h-4 w-4" />,
    },
  },
  {
    name: "products",
    list: "/products",
    create: "/products/create",
    edit: "/products/edit/:id",
    meta: {
      canDelete: true,
      icon: <ShoppingBagIcon className="h-4 w-4" />,
    },
  },
  {
    name: "stores",
    list: "/stores",
    create: "/stores/create",
    edit: "/stores/edit/:id",
    meta: {
      canDelete: true,
      icon: <BuildingStorefrontIcon className="h-4 w-4" />,
    },
  },
  {
    name: "store_features",
    list: "/store-features",
    create: "/store-features/create",
    edit: "/store-features/edit/:id",
    meta: {
      canDelete: true,
      icon: <BuildingStorefrontIcon className="h-4 w-4" />,
    },
  },
  {
    name: "users",
    list: "/users",
    create: "/users/create",
    edit: "/users/edit/:id",
    meta: {
      canDelete: true,
      icon: <UsersIcon className="h-4 w-4" />,
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
