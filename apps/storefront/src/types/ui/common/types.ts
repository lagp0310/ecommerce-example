import type { OperationVariables } from "@apollo/client";

export type SortByDirection = "asc" | "desc";

export type BaseAccordionItem = {
  name: string;
  initiallyCollapsed?: boolean;
  children: React.ReactNode;
  action?: React.ReactNode;
  actionClassName?: string;
  forceMount?: true;
  styles?: React.CSSProperties & { [key: string]: string };
};

export type BaseSelectOption = {
  id: string;
  name: string;
  value: string;
  isDisabled?: boolean;
  sortBy?: string;
  direction?: SortByDirection;
  additionalSearchParams?: Record<string, string>;
};

export type BaseOperationVariables = OperationVariables;

export type GetParsedOptionsResponse = (Pick<
  BaseSelectOption,
  "id" | "name" | "value"
> & { additional_search_params?: object })[];

export type GetParsedOptionsRenamedResponse = Omit<
  GetParsedOptionsResponse,
  "additional_search_params"
> & { additionalSearchParams?: object };
