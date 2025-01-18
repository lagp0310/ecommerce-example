import type { Categories } from "@/gql/graphql";

export type CategoryResponse = Omit<Categories, "image_url"> & {
  imageUrl?: string;
};

export type Category = {
  categoryId: string;
  image?: React.ReactNode;
  title: string;
  url: string;
  numberOfItems?: number;
};
