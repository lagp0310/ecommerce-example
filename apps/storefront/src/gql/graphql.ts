/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `banner_types` collection */
  deleteFrombanner_typesCollection: Banner_TypesDeleteResponse;
  /** Deletes zero or more records from the `business_currency` collection */
  deleteFrombusiness_currencyCollection: Business_CurrencyDeleteResponse;
  /** Deletes zero or more records from the `businesses` collection */
  deleteFrombusinessesCollection: BusinessesDeleteResponse;
  /** Deletes zero or more records from the `cart_address` collection */
  deleteFromcart_addressCollection: Cart_AddressDeleteResponse;
  /** Deletes zero or more records from the `cart_state` collection */
  deleteFromcart_stateCollection: Cart_StateDeleteResponse;
  /** Deletes zero or more records from the `cart_states` collection */
  deleteFromcart_statesCollection: Cart_StatesDeleteResponse;
  /** Deletes zero or more records from the `carts` collection */
  deleteFromcartsCollection: CartsDeleteResponse;
  /** Deletes zero or more records from the `categories` collection */
  deleteFromcategoriesCollection: CategoriesDeleteResponse;
  /** Deletes zero or more records from the `countries` collection */
  deleteFromcountriesCollection: CountriesDeleteResponse;
  /** Deletes zero or more records from the `country_states` collection */
  deleteFromcountry_statesCollection: Country_StatesDeleteResponse;
  /** Deletes zero or more records from the `coupon_codes` collection */
  deleteFromcoupon_codesCollection: Coupon_CodesDeleteResponse;
  /** Deletes zero or more records from the `currencies` collection */
  deleteFromcurrenciesCollection: CurrenciesDeleteResponse;
  /** Deletes zero or more records from the `customer_address_types` collection */
  deleteFromcustomer_address_typesCollection: Customer_Address_TypesDeleteResponse;
  /** Deletes zero or more records from the `customer_addresses` collection */
  deleteFromcustomer_addressesCollection: Customer_AddressesDeleteResponse;
  /** Deletes zero or more records from the `customers` collection */
  deleteFromcustomersCollection: CustomersDeleteResponse;
  /** Deletes zero or more records from the `emails` collection */
  deleteFromemailsCollection: EmailsDeleteResponse;
  /** Deletes zero or more records from the `header_banners` collection */
  deleteFromheader_bannersCollection: Header_BannersDeleteResponse;
  /** Deletes zero or more records from the `image_banners` collection */
  deleteFromimage_bannersCollection: Image_BannersDeleteResponse;
  /** Deletes zero or more records from the `line_items` collection */
  deleteFromline_itemsCollection: Line_ItemsDeleteResponse;
  /** Deletes zero or more records from the `locales` collection */
  deleteFromlocalesCollection: LocalesDeleteResponse;
  /** Deletes zero or more records from the `offer_banners` collection */
  deleteFromoffer_bannersCollection: Offer_BannersDeleteResponse;
  /** Deletes zero or more records from the `orders` collection */
  deleteFromordersCollection: OrdersDeleteResponse;
  /** Deletes zero or more records from the `payment_method_types` collection */
  deleteFrompayment_method_typesCollection: Payment_Method_TypesDeleteResponse;
  /** Deletes zero or more records from the `payment_methods` collection */
  deleteFrompayment_methodsCollection: Payment_MethodsDeleteResponse;
  /** Deletes zero or more records from the `payments` collection */
  deleteFrompaymentsCollection: PaymentsDeleteResponse;
  /** Deletes zero or more records from the `phone_numbers` collection */
  deleteFromphone_numbersCollection: Phone_NumbersDeleteResponse;
  /** Deletes zero or more records from the `product_category` collection */
  deleteFromproduct_categoryCollection: Product_CategoryDeleteResponse;
  /** Deletes zero or more records from the `product_tag` collection */
  deleteFromproduct_tagCollection: Product_TagDeleteResponse;
  /** Deletes zero or more records from the `product_tags` collection */
  deleteFromproduct_tagsCollection: Product_TagsDeleteResponse;
  /** Deletes zero or more records from the `product_weights` collection */
  deleteFromproduct_weightsCollection: Product_WeightsDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `store_features` collection */
  deleteFromstore_featuresCollection: Store_FeaturesDeleteResponse;
  /** Deletes zero or more records from the `stores` collection */
  deleteFromstoresCollection: StoresDeleteResponse;
  /** Deletes zero or more records from the `tag_types` collection */
  deleteFromtag_typesCollection: Tag_TypesDeleteResponse;
  /** Deletes zero or more records from the `transactions` collection */
  deleteFromtransactionsCollection: TransactionsDeleteResponse;
  /** Deletes zero or more records from the `weight_units` collection */
  deleteFromweight_unitsCollection: Weight_UnitsDeleteResponse;
  get_monthly_users_info?: Maybe<Scalars['Int']['output']>;
  get_products_max_price?: Maybe<Scalars['Float']['output']>;
  /** Adds one or more `banner_types` records to the collection */
  insertIntobanner_typesCollection?: Maybe<Banner_TypesInsertResponse>;
  /** Adds one or more `business_currency` records to the collection */
  insertIntobusiness_currencyCollection?: Maybe<Business_CurrencyInsertResponse>;
  /** Adds one or more `businesses` records to the collection */
  insertIntobusinessesCollection?: Maybe<BusinessesInsertResponse>;
  /** Adds one or more `cart_address` records to the collection */
  insertIntocart_addressCollection?: Maybe<Cart_AddressInsertResponse>;
  /** Adds one or more `cart_state` records to the collection */
  insertIntocart_stateCollection?: Maybe<Cart_StateInsertResponse>;
  /** Adds one or more `cart_states` records to the collection */
  insertIntocart_statesCollection?: Maybe<Cart_StatesInsertResponse>;
  /** Adds one or more `carts` records to the collection */
  insertIntocartsCollection?: Maybe<CartsInsertResponse>;
  /** Adds one or more `categories` records to the collection */
  insertIntocategoriesCollection?: Maybe<CategoriesInsertResponse>;
  /** Adds one or more `countries` records to the collection */
  insertIntocountriesCollection?: Maybe<CountriesInsertResponse>;
  /** Adds one or more `country_states` records to the collection */
  insertIntocountry_statesCollection?: Maybe<Country_StatesInsertResponse>;
  /** Adds one or more `coupon_codes` records to the collection */
  insertIntocoupon_codesCollection?: Maybe<Coupon_CodesInsertResponse>;
  /** Adds one or more `currencies` records to the collection */
  insertIntocurrenciesCollection?: Maybe<CurrenciesInsertResponse>;
  /** Adds one or more `customer_address_types` records to the collection */
  insertIntocustomer_address_typesCollection?: Maybe<Customer_Address_TypesInsertResponse>;
  /** Adds one or more `customer_addresses` records to the collection */
  insertIntocustomer_addressesCollection?: Maybe<Customer_AddressesInsertResponse>;
  /** Adds one or more `customers` records to the collection */
  insertIntocustomersCollection?: Maybe<CustomersInsertResponse>;
  /** Adds one or more `emails` records to the collection */
  insertIntoemailsCollection?: Maybe<EmailsInsertResponse>;
  /** Adds one or more `header_banners` records to the collection */
  insertIntoheader_bannersCollection?: Maybe<Header_BannersInsertResponse>;
  /** Adds one or more `image_banners` records to the collection */
  insertIntoimage_bannersCollection?: Maybe<Image_BannersInsertResponse>;
  /** Adds one or more `line_items` records to the collection */
  insertIntoline_itemsCollection?: Maybe<Line_ItemsInsertResponse>;
  /** Adds one or more `locales` records to the collection */
  insertIntolocalesCollection?: Maybe<LocalesInsertResponse>;
  /** Adds one or more `offer_banners` records to the collection */
  insertIntooffer_bannersCollection?: Maybe<Offer_BannersInsertResponse>;
  /** Adds one or more `orders` records to the collection */
  insertIntoordersCollection?: Maybe<OrdersInsertResponse>;
  /** Adds one or more `payment_method_types` records to the collection */
  insertIntopayment_method_typesCollection?: Maybe<Payment_Method_TypesInsertResponse>;
  /** Adds one or more `payment_methods` records to the collection */
  insertIntopayment_methodsCollection?: Maybe<Payment_MethodsInsertResponse>;
  /** Adds one or more `payments` records to the collection */
  insertIntopaymentsCollection?: Maybe<PaymentsInsertResponse>;
  /** Adds one or more `phone_numbers` records to the collection */
  insertIntophone_numbersCollection?: Maybe<Phone_NumbersInsertResponse>;
  /** Adds one or more `product_category` records to the collection */
  insertIntoproduct_categoryCollection?: Maybe<Product_CategoryInsertResponse>;
  /** Adds one or more `product_tag` records to the collection */
  insertIntoproduct_tagCollection?: Maybe<Product_TagInsertResponse>;
  /** Adds one or more `product_tags` records to the collection */
  insertIntoproduct_tagsCollection?: Maybe<Product_TagsInsertResponse>;
  /** Adds one or more `product_weights` records to the collection */
  insertIntoproduct_weightsCollection?: Maybe<Product_WeightsInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `store_features` records to the collection */
  insertIntostore_featuresCollection?: Maybe<Store_FeaturesInsertResponse>;
  /** Adds one or more `stores` records to the collection */
  insertIntostoresCollection?: Maybe<StoresInsertResponse>;
  /** Adds one or more `tag_types` records to the collection */
  insertIntotag_typesCollection?: Maybe<Tag_TypesInsertResponse>;
  /** Adds one or more `transactions` records to the collection */
  insertIntotransactionsCollection?: Maybe<TransactionsInsertResponse>;
  /** Adds one or more `weight_units` records to the collection */
  insertIntoweight_unitsCollection?: Maybe<Weight_UnitsInsertResponse>;
  /** Updates zero or more records in the `banner_types` collection */
  updatebanner_typesCollection: Banner_TypesUpdateResponse;
  /** Updates zero or more records in the `business_currency` collection */
  updatebusiness_currencyCollection: Business_CurrencyUpdateResponse;
  /** Updates zero or more records in the `businesses` collection */
  updatebusinessesCollection: BusinessesUpdateResponse;
  /** Updates zero or more records in the `cart_address` collection */
  updatecart_addressCollection: Cart_AddressUpdateResponse;
  /** Updates zero or more records in the `cart_state` collection */
  updatecart_stateCollection: Cart_StateUpdateResponse;
  /** Updates zero or more records in the `cart_states` collection */
  updatecart_statesCollection: Cart_StatesUpdateResponse;
  /** Updates zero or more records in the `carts` collection */
  updatecartsCollection: CartsUpdateResponse;
  /** Updates zero or more records in the `categories` collection */
  updatecategoriesCollection: CategoriesUpdateResponse;
  /** Updates zero or more records in the `countries` collection */
  updatecountriesCollection: CountriesUpdateResponse;
  /** Updates zero or more records in the `country_states` collection */
  updatecountry_statesCollection: Country_StatesUpdateResponse;
  /** Updates zero or more records in the `coupon_codes` collection */
  updatecoupon_codesCollection: Coupon_CodesUpdateResponse;
  /** Updates zero or more records in the `currencies` collection */
  updatecurrenciesCollection: CurrenciesUpdateResponse;
  /** Updates zero or more records in the `customer_address_types` collection */
  updatecustomer_address_typesCollection: Customer_Address_TypesUpdateResponse;
  /** Updates zero or more records in the `customer_addresses` collection */
  updatecustomer_addressesCollection: Customer_AddressesUpdateResponse;
  /** Updates zero or more records in the `customers` collection */
  updatecustomersCollection: CustomersUpdateResponse;
  /** Updates zero or more records in the `emails` collection */
  updateemailsCollection: EmailsUpdateResponse;
  /** Updates zero or more records in the `header_banners` collection */
  updateheader_bannersCollection: Header_BannersUpdateResponse;
  /** Updates zero or more records in the `image_banners` collection */
  updateimage_bannersCollection: Image_BannersUpdateResponse;
  /** Updates zero or more records in the `line_items` collection */
  updateline_itemsCollection: Line_ItemsUpdateResponse;
  /** Updates zero or more records in the `locales` collection */
  updatelocalesCollection: LocalesUpdateResponse;
  /** Updates zero or more records in the `offer_banners` collection */
  updateoffer_bannersCollection: Offer_BannersUpdateResponse;
  /** Updates zero or more records in the `orders` collection */
  updateordersCollection: OrdersUpdateResponse;
  /** Updates zero or more records in the `payment_method_types` collection */
  updatepayment_method_typesCollection: Payment_Method_TypesUpdateResponse;
  /** Updates zero or more records in the `payment_methods` collection */
  updatepayment_methodsCollection: Payment_MethodsUpdateResponse;
  /** Updates zero or more records in the `payments` collection */
  updatepaymentsCollection: PaymentsUpdateResponse;
  /** Updates zero or more records in the `phone_numbers` collection */
  updatephone_numbersCollection: Phone_NumbersUpdateResponse;
  /** Updates zero or more records in the `product_category` collection */
  updateproduct_categoryCollection: Product_CategoryUpdateResponse;
  /** Updates zero or more records in the `product_tag` collection */
  updateproduct_tagCollection: Product_TagUpdateResponse;
  /** Updates zero or more records in the `product_tags` collection */
  updateproduct_tagsCollection: Product_TagsUpdateResponse;
  /** Updates zero or more records in the `product_weights` collection */
  updateproduct_weightsCollection: Product_WeightsUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `store_features` collection */
  updatestore_featuresCollection: Store_FeaturesUpdateResponse;
  /** Updates zero or more records in the `stores` collection */
  updatestoresCollection: StoresUpdateResponse;
  /** Updates zero or more records in the `tag_types` collection */
  updatetag_typesCollection: Tag_TypesUpdateResponse;
  /** Updates zero or more records in the `transactions` collection */
  updatetransactionsCollection: TransactionsUpdateResponse;
  /** Updates zero or more records in the `weight_units` collection */
  updateweight_unitsCollection: Weight_UnitsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombanner_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Banner_TypesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombusiness_CurrencyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Business_CurrencyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombusinessesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BusinessesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcart_AddressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_AddressFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcart_StateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_StateFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcart_StatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_StatesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcartsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcountriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CountriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcountry_StatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Country_StatesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcoupon_CodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Coupon_CodesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcurrenciesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CurrenciesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcustomer_Address_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Customer_Address_TypesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcustomer_AddressesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Customer_AddressesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcustomersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromemailsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EmailsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromheader_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Header_BannersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromimage_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Image_BannersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromline_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Line_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlocalesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LocalesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromoffer_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Offer_BannersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompayment_Method_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_Method_TypesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompayment_MethodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_MethodsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompaymentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PaymentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromphone_NumbersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Phone_NumbersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_CategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_CategoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_TagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_TagFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_TagsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_WeightsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_WeightsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstore_FeaturesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Store_FeaturesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstoresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StoresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtag_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Tag_TypesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtransactionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TransactionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromweight_UnitsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Weight_UnitsFilter>;
};


/** The root type for creating and mutating data */
export type MutationGet_Monthly_Users_InfoArgs = {
  current_date_arg?: InputMaybe<Scalars['Datetime']['input']>;
};


/** The root type for creating and mutating data */
export type MutationGet_Products_Max_PriceArgs = {
  store_id: Scalars['UUID']['input'];
};


/** The root type for creating and mutating data */
export type MutationInsertIntobanner_TypesCollectionArgs = {
  objects: Array<Banner_TypesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntobusiness_CurrencyCollectionArgs = {
  objects: Array<Business_CurrencyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntobusinessesCollectionArgs = {
  objects: Array<BusinessesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocart_AddressCollectionArgs = {
  objects: Array<Cart_AddressInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocart_StateCollectionArgs = {
  objects: Array<Cart_StateInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocart_StatesCollectionArgs = {
  objects: Array<Cart_StatesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocartsCollectionArgs = {
  objects: Array<CartsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocategoriesCollectionArgs = {
  objects: Array<CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocountriesCollectionArgs = {
  objects: Array<CountriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocountry_StatesCollectionArgs = {
  objects: Array<Country_StatesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocoupon_CodesCollectionArgs = {
  objects: Array<Coupon_CodesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocurrenciesCollectionArgs = {
  objects: Array<CurrenciesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocustomer_Address_TypesCollectionArgs = {
  objects: Array<Customer_Address_TypesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocustomer_AddressesCollectionArgs = {
  objects: Array<Customer_AddressesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocustomersCollectionArgs = {
  objects: Array<CustomersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoemailsCollectionArgs = {
  objects: Array<EmailsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoheader_BannersCollectionArgs = {
  objects: Array<Header_BannersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoimage_BannersCollectionArgs = {
  objects: Array<Image_BannersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoline_ItemsCollectionArgs = {
  objects: Array<Line_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolocalesCollectionArgs = {
  objects: Array<LocalesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntooffer_BannersCollectionArgs = {
  objects: Array<Offer_BannersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoordersCollectionArgs = {
  objects: Array<OrdersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopayment_Method_TypesCollectionArgs = {
  objects: Array<Payment_Method_TypesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopayment_MethodsCollectionArgs = {
  objects: Array<Payment_MethodsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopaymentsCollectionArgs = {
  objects: Array<PaymentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntophone_NumbersCollectionArgs = {
  objects: Array<Phone_NumbersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_CategoryCollectionArgs = {
  objects: Array<Product_CategoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_TagCollectionArgs = {
  objects: Array<Product_TagInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_TagsCollectionArgs = {
  objects: Array<Product_TagsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_WeightsCollectionArgs = {
  objects: Array<Product_WeightsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductsCollectionArgs = {
  objects: Array<ProductsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostore_FeaturesCollectionArgs = {
  objects: Array<Store_FeaturesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostoresCollectionArgs = {
  objects: Array<StoresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotag_TypesCollectionArgs = {
  objects: Array<Tag_TypesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotransactionsCollectionArgs = {
  objects: Array<TransactionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoweight_UnitsCollectionArgs = {
  objects: Array<Weight_UnitsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatebanner_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Banner_TypesFilter>;
  set: Banner_TypesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatebusiness_CurrencyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Business_CurrencyFilter>;
  set: Business_CurrencyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatebusinessesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BusinessesFilter>;
  set: BusinessesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecart_AddressCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_AddressFilter>;
  set: Cart_AddressUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecart_StateCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_StateFilter>;
  set: Cart_StateUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecart_StatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Cart_StatesFilter>;
  set: Cart_StatesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecartsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CartsFilter>;
  set: CartsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CategoriesFilter>;
  set: CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecountriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CountriesFilter>;
  set: CountriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecountry_StatesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Country_StatesFilter>;
  set: Country_StatesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecoupon_CodesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Coupon_CodesFilter>;
  set: Coupon_CodesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecurrenciesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CurrenciesFilter>;
  set: CurrenciesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecustomer_Address_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Customer_Address_TypesFilter>;
  set: Customer_Address_TypesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecustomer_AddressesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Customer_AddressesFilter>;
  set: Customer_AddressesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecustomersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomersFilter>;
  set: CustomersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateemailsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EmailsFilter>;
  set: EmailsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateheader_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Header_BannersFilter>;
  set: Header_BannersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateimage_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Image_BannersFilter>;
  set: Image_BannersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateline_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Line_ItemsFilter>;
  set: Line_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelocalesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LocalesFilter>;
  set: LocalesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateoffer_BannersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Offer_BannersFilter>;
  set: Offer_BannersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateordersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrdersFilter>;
  set: OrdersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepayment_Method_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_Method_TypesFilter>;
  set: Payment_Method_TypesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepayment_MethodsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_MethodsFilter>;
  set: Payment_MethodsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepaymentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PaymentsFilter>;
  set: PaymentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatephone_NumbersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Phone_NumbersFilter>;
  set: Phone_NumbersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproduct_CategoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_CategoryFilter>;
  set: Product_CategoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproduct_TagCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_TagFilter>;
  set: Product_TagUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproduct_TagsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_TagsFilter>;
  set: Product_TagsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproduct_WeightsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_WeightsFilter>;
  set: Product_WeightsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
  set: ProductsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestore_FeaturesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Store_FeaturesFilter>;
  set: Store_FeaturesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestoresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<StoresFilter>;
  set: StoresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetag_TypesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Tag_TypesFilter>;
  set: Tag_TypesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetransactionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TransactionsFilter>;
  set: TransactionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateweight_UnitsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Weight_UnitsFilter>;
  set: Weight_UnitsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `banner_types` */
  banner_typesCollection?: Maybe<Banner_TypesConnection>;
  /** A pagable collection of type `business_currency` */
  business_currencyCollection?: Maybe<Business_CurrencyConnection>;
  /** A pagable collection of type `businesses` */
  businessesCollection?: Maybe<BusinessesConnection>;
  /** A pagable collection of type `cart_address` */
  cart_addressCollection?: Maybe<Cart_AddressConnection>;
  /** A pagable collection of type `cart_state` */
  cart_stateCollection?: Maybe<Cart_StateConnection>;
  /** A pagable collection of type `cart_states` */
  cart_statesCollection?: Maybe<Cart_StatesConnection>;
  /** A pagable collection of type `carts` */
  cartsCollection?: Maybe<CartsConnection>;
  /** A pagable collection of type `categories` */
  categoriesCollection?: Maybe<CategoriesConnection>;
  /** A pagable collection of type `countries` */
  countriesCollection?: Maybe<CountriesConnection>;
  /** A pagable collection of type `country_states` */
  country_statesCollection?: Maybe<Country_StatesConnection>;
  /** A pagable collection of type `coupon_codes` */
  coupon_codesCollection?: Maybe<Coupon_CodesConnection>;
  /** A pagable collection of type `currencies` */
  currenciesCollection?: Maybe<CurrenciesConnection>;
  /** A pagable collection of type `customer_address_types` */
  customer_address_typesCollection?: Maybe<Customer_Address_TypesConnection>;
  /** A pagable collection of type `customer_addresses` */
  customer_addressesCollection?: Maybe<Customer_AddressesConnection>;
  /** A pagable collection of type `customers` */
  customersCollection?: Maybe<CustomersConnection>;
  /** A pagable collection of type `emails` */
  emailsCollection?: Maybe<EmailsConnection>;
  /** A pagable collection of type `header_banners` */
  header_bannersCollection?: Maybe<Header_BannersConnection>;
  /** A pagable collection of type `image_banners` */
  image_bannersCollection?: Maybe<Image_BannersConnection>;
  /** A pagable collection of type `line_items` */
  line_itemsCollection?: Maybe<Line_ItemsConnection>;
  /** A pagable collection of type `locales` */
  localesCollection?: Maybe<LocalesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `offer_banners` */
  offer_bannersCollection?: Maybe<Offer_BannersConnection>;
  /** A pagable collection of type `orders` */
  ordersCollection?: Maybe<OrdersConnection>;
  /** A pagable collection of type `payment_method_types` */
  payment_method_typesCollection?: Maybe<Payment_Method_TypesConnection>;
  /** A pagable collection of type `payment_methods` */
  payment_methodsCollection?: Maybe<Payment_MethodsConnection>;
  /** A pagable collection of type `payments` */
  paymentsCollection?: Maybe<PaymentsConnection>;
  /** A pagable collection of type `phone_numbers` */
  phone_numbersCollection?: Maybe<Phone_NumbersConnection>;
  /** A pagable collection of type `product_category` */
  product_categoryCollection?: Maybe<Product_CategoryConnection>;
  /** A pagable collection of type `product_tag` */
  product_tagCollection?: Maybe<Product_TagConnection>;
  /** A pagable collection of type `product_tags` */
  product_tagsCollection?: Maybe<Product_TagsConnection>;
  /** A pagable collection of type `product_weights` */
  product_weightsCollection?: Maybe<Product_WeightsConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `store_features` */
  store_featuresCollection?: Maybe<Store_FeaturesConnection>;
  /** A pagable collection of type `stores` */
  storesCollection?: Maybe<StoresConnection>;
  /** A pagable collection of type `tag_types` */
  tag_typesCollection?: Maybe<Tag_TypesConnection>;
  /** A pagable collection of type `transactions` */
  transactionsCollection?: Maybe<TransactionsConnection>;
  /** A pagable collection of type `weight_units` */
  weight_unitsCollection?: Maybe<Weight_UnitsConnection>;
};


/** The root type for querying data */
export type QueryBanner_TypesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Banner_TypesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Banner_TypesOrderBy>>;
};


/** The root type for querying data */
export type QueryBusiness_CurrencyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Business_CurrencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Business_CurrencyOrderBy>>;
};


/** The root type for querying data */
export type QueryBusinessesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BusinessesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BusinessesOrderBy>>;
};


/** The root type for querying data */
export type QueryCart_AddressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_AddressOrderBy>>;
};


/** The root type for querying data */
export type QueryCart_StateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_StateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_StateOrderBy>>;
};


/** The root type for querying data */
export type QueryCart_StatesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_StatesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_StatesOrderBy>>;
};


/** The root type for querying data */
export type QueryCartsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};


/** The root type for querying data */
export type QueryCategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryCountriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CountriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};


/** The root type for querying data */
export type QueryCountry_StatesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Country_StatesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Country_StatesOrderBy>>;
};


/** The root type for querying data */
export type QueryCoupon_CodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Coupon_CodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Coupon_CodesOrderBy>>;
};


/** The root type for querying data */
export type QueryCurrenciesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CurrenciesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrenciesOrderBy>>;
};


/** The root type for querying data */
export type QueryCustomer_Address_TypesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Customer_Address_TypesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Customer_Address_TypesOrderBy>>;
};


/** The root type for querying data */
export type QueryCustomer_AddressesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Customer_AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Customer_AddressesOrderBy>>;
};


/** The root type for querying data */
export type QueryCustomersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


/** The root type for querying data */
export type QueryEmailsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EmailsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EmailsOrderBy>>;
};


/** The root type for querying data */
export type QueryHeader_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Header_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Header_BannersOrderBy>>;
};


/** The root type for querying data */
export type QueryImage_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Image_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Image_BannersOrderBy>>;
};


/** The root type for querying data */
export type QueryLine_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Line_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Line_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryLocalesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LocalesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LocalesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryOffer_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Offer_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Offer_BannersOrderBy>>;
};


/** The root type for querying data */
export type QueryOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};


/** The root type for querying data */
export type QueryPayment_Method_TypesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_Method_TypesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_Method_TypesOrderBy>>;
};


/** The root type for querying data */
export type QueryPayment_MethodsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_MethodsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_MethodsOrderBy>>;
};


/** The root type for querying data */
export type QueryPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


/** The root type for querying data */
export type QueryPhone_NumbersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Phone_NumbersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Phone_NumbersOrderBy>>;
};


/** The root type for querying data */
export type QueryProduct_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoryOrderBy>>;
};


/** The root type for querying data */
export type QueryProduct_TagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_TagOrderBy>>;
};


/** The root type for querying data */
export type QueryProduct_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_TagsOrderBy>>;
};


/** The root type for querying data */
export type QueryProduct_WeightsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_WeightsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_WeightsOrderBy>>;
};


/** The root type for querying data */
export type QueryProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root type for querying data */
export type QueryStore_FeaturesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Store_FeaturesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Store_FeaturesOrderBy>>;
};


/** The root type for querying data */
export type QueryStoresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StoresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};


/** The root type for querying data */
export type QueryTag_TypesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Tag_TypesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Tag_TypesOrderBy>>;
};


/** The root type for querying data */
export type QueryTransactionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TransactionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};


/** The root type for querying data */
export type QueryWeight_UnitsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Weight_UnitsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Weight_UnitsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Banner_Types = Node & {
  __typename?: 'banner_types';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  header_bannersCollection?: Maybe<Header_BannersConnection>;
  id: Scalars['UUID']['output'];
  image_bannersCollection?: Maybe<Image_BannersConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  offer_bannersCollection?: Maybe<Offer_BannersConnection>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Banner_TypesHeader_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Header_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Header_BannersOrderBy>>;
};


export type Banner_TypesImage_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Image_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Image_BannersOrderBy>>;
};


export type Banner_TypesOffer_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Offer_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Offer_BannersOrderBy>>;
};

export type Banner_TypesConnection = {
  __typename?: 'banner_typesConnection';
  edges: Array<Banner_TypesEdge>;
  pageInfo: PageInfo;
};

export type Banner_TypesDeleteResponse = {
  __typename?: 'banner_typesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Banner_Types>;
};

export type Banner_TypesEdge = {
  __typename?: 'banner_typesEdge';
  cursor: Scalars['String']['output'];
  node: Banner_Types;
};

export type Banner_TypesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Banner_TypesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Banner_TypesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Banner_TypesFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Banner_TypesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Banner_TypesInsertResponse = {
  __typename?: 'banner_typesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Banner_Types>;
};

export type Banner_TypesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Banner_TypesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Banner_TypesUpdateResponse = {
  __typename?: 'banner_typesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Banner_Types>;
};

export type Business_Currency = Node & {
  __typename?: 'business_currency';
  business: Scalars['UUID']['output'];
  businesses?: Maybe<Businesses>;
  created_at: Scalars['Datetime']['output'];
  currencies?: Maybe<Currencies>;
  currency: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Business_CurrencyConnection = {
  __typename?: 'business_currencyConnection';
  edges: Array<Business_CurrencyEdge>;
  pageInfo: PageInfo;
};

export type Business_CurrencyDeleteResponse = {
  __typename?: 'business_currencyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Business_Currency>;
};

export type Business_CurrencyEdge = {
  __typename?: 'business_currencyEdge';
  cursor: Scalars['String']['output'];
  node: Business_Currency;
};

export type Business_CurrencyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Business_CurrencyFilter>>;
  business?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Business_CurrencyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Business_CurrencyFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Business_CurrencyInsertInput = {
  business?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Business_CurrencyInsertResponse = {
  __typename?: 'business_currencyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Business_Currency>;
};

export type Business_CurrencyOrderBy = {
  business?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Business_CurrencyUpdateInput = {
  business?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Business_CurrencyUpdateResponse = {
  __typename?: 'business_currencyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Business_Currency>;
};

export type Businesses = Node & {
  __typename?: 'businesses';
  business_currencyCollection?: Maybe<Business_CurrencyConnection>;
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  storesCollection?: Maybe<StoresConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type BusinessesBusiness_CurrencyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Business_CurrencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Business_CurrencyOrderBy>>;
};


export type BusinessesStoresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<StoresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StoresOrderBy>>;
};

export type BusinessesConnection = {
  __typename?: 'businessesConnection';
  edges: Array<BusinessesEdge>;
  pageInfo: PageInfo;
};

export type BusinessesDeleteResponse = {
  __typename?: 'businessesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Businesses>;
};

export type BusinessesEdge = {
  __typename?: 'businessesEdge';
  cursor: Scalars['String']['output'];
  node: Businesses;
};

export type BusinessesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<BusinessesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<BusinessesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<BusinessesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type BusinessesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type BusinessesInsertResponse = {
  __typename?: 'businessesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Businesses>;
};

export type BusinessesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type BusinessesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type BusinessesUpdateResponse = {
  __typename?: 'businessesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Businesses>;
};

export type Cart_Address = Node & {
  __typename?: 'cart_address';
  address: Scalars['UUID']['output'];
  address_type: Scalars['UUID']['output'];
  cart: Scalars['UUID']['output'];
  carts?: Maybe<Carts>;
  created_at: Scalars['Datetime']['output'];
  customer_address_types?: Maybe<Customer_Address_Types>;
  customer_addresses?: Maybe<Customer_Addresses>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Cart_AddressConnection = {
  __typename?: 'cart_addressConnection';
  edges: Array<Cart_AddressEdge>;
  pageInfo: PageInfo;
};

export type Cart_AddressDeleteResponse = {
  __typename?: 'cart_addressDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_Address>;
};

export type Cart_AddressEdge = {
  __typename?: 'cart_addressEdge';
  cursor: Scalars['String']['output'];
  node: Cart_Address;
};

export type Cart_AddressFilter = {
  address?: InputMaybe<UuidFilter>;
  address_type?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cart_AddressFilter>>;
  cart?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cart_AddressFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cart_AddressFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Cart_AddressInsertInput = {
  address?: InputMaybe<Scalars['UUID']['input']>;
  address_type?: InputMaybe<Scalars['UUID']['input']>;
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_AddressInsertResponse = {
  __typename?: 'cart_addressInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_Address>;
};

export type Cart_AddressOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  address_type?: InputMaybe<OrderByDirection>;
  cart?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Cart_AddressUpdateInput = {
  address?: InputMaybe<Scalars['UUID']['input']>;
  address_type?: InputMaybe<Scalars['UUID']['input']>;
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_AddressUpdateResponse = {
  __typename?: 'cart_addressUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_Address>;
};

export type Cart_State = Node & {
  __typename?: 'cart_state';
  cart: Scalars['UUID']['output'];
  cart_states?: Maybe<Cart_States>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  state: Scalars['UUID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Cart_StateConnection = {
  __typename?: 'cart_stateConnection';
  edges: Array<Cart_StateEdge>;
  pageInfo: PageInfo;
};

export type Cart_StateDeleteResponse = {
  __typename?: 'cart_stateDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_State>;
};

export type Cart_StateEdge = {
  __typename?: 'cart_stateEdge';
  cursor: Scalars['String']['output'];
  node: Cart_State;
};

export type Cart_StateFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cart_StateFilter>>;
  cart?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cart_StateFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cart_StateFilter>>;
  state?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Cart_StateInsertInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_StateInsertResponse = {
  __typename?: 'cart_stateInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_State>;
};

export type Cart_StateOrderBy = {
  cart?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Cart_StateUpdateInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_StateUpdateResponse = {
  __typename?: 'cart_stateUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_State>;
};

export type Cart_States = Node & {
  __typename?: 'cart_states';
  cart_stateCollection?: Maybe<Cart_StateConnection>;
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  state: Scalars['String']['output'];
  state_code: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Cart_StatesCart_StateCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_StateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_StateOrderBy>>;
};

export type Cart_StatesConnection = {
  __typename?: 'cart_statesConnection';
  edges: Array<Cart_StatesEdge>;
  pageInfo: PageInfo;
};

export type Cart_StatesDeleteResponse = {
  __typename?: 'cart_statesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_States>;
};

export type Cart_StatesEdge = {
  __typename?: 'cart_statesEdge';
  cursor: Scalars['String']['output'];
  node: Cart_States;
};

export type Cart_StatesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cart_StatesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cart_StatesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cart_StatesFilter>>;
  state?: InputMaybe<StringFilter>;
  state_code?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Cart_StatesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_StatesInsertResponse = {
  __typename?: 'cart_statesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_States>;
};

export type Cart_StatesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  state_code?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Cart_StatesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Cart_StatesUpdateResponse = {
  __typename?: 'cart_statesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cart_States>;
};

export type Carts = Node & {
  __typename?: 'carts';
  anonymous_id?: Maybe<Scalars['UUID']['output']>;
  cart_addressCollection?: Maybe<Cart_AddressConnection>;
  created_at: Scalars['Datetime']['output'];
  currencies?: Maybe<Currencies>;
  currency: Scalars['UUID']['output'];
  customer?: Maybe<Scalars['UUID']['output']>;
  customers?: Maybe<Customers>;
  id: Scalars['UUID']['output'];
  line_itemsCollection?: Maybe<Line_ItemsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  ordersCollection?: Maybe<OrdersConnection>;
  paymentsCollection?: Maybe<PaymentsConnection>;
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CartsCart_AddressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_AddressOrderBy>>;
};


export type CartsLine_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Line_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Line_ItemsOrderBy>>;
};


export type CartsOrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};


export type CartsPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

export type CartsConnection = {
  __typename?: 'cartsConnection';
  edges: Array<CartsEdge>;
  pageInfo: PageInfo;
};

export type CartsDeleteResponse = {
  __typename?: 'cartsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type CartsEdge = {
  __typename?: 'cartsEdge';
  cursor: Scalars['String']['output'];
  node: Carts;
};

export type CartsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CartsFilter>>;
  anonymous_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<UuidFilter>;
  customer?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CartsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CartsFilter>>;
  store?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CartsInsertInput = {
  anonymous_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CartsInsertResponse = {
  __typename?: 'cartsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type CartsOrderBy = {
  anonymous_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  customer?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CartsUpdateInput = {
  anonymous_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CartsUpdateResponse = {
  __typename?: 'cartsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type Categories = Node & {
  __typename?: 'categories';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_categoryCollection?: Maybe<Product_CategoryConnection>;
  store?: Maybe<Scalars['UUID']['output']>;
  stores?: Maybe<Stores>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CategoriesProduct_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoryOrderBy>>;
};

export type CategoriesConnection = {
  __typename?: 'categoriesConnection';
  edges: Array<CategoriesEdge>;
  pageInfo: PageInfo;
};

export type CategoriesDeleteResponse = {
  __typename?: 'categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type CategoriesEdge = {
  __typename?: 'categoriesEdge';
  cursor: Scalars['String']['output'];
  node: Categories;
};

export type CategoriesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CategoriesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image_url?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CategoriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CategoriesFilter>>;
  store?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CategoriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CategoriesInsertResponse = {
  __typename?: 'categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type CategoriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CategoriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CategoriesUpdateResponse = {
  __typename?: 'categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Categories>;
};

export type Countries = Node & {
  __typename?: 'countries';
  alpha_2: Scalars['String']['output'];
  country_code: Scalars['String']['output'];
  country_statesCollection?: Maybe<Country_StatesConnection>;
  created_at: Scalars['Datetime']['output'];
  customer_addressesCollection?: Maybe<Customer_AddressesConnection>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CountriesCountry_StatesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Country_StatesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Country_StatesOrderBy>>;
};


export type CountriesCustomer_AddressesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Customer_AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Customer_AddressesOrderBy>>;
};

export type CountriesConnection = {
  __typename?: 'countriesConnection';
  edges: Array<CountriesEdge>;
  pageInfo: PageInfo;
};

export type CountriesDeleteResponse = {
  __typename?: 'countriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type CountriesEdge = {
  __typename?: 'countriesEdge';
  cursor: Scalars['String']['output'];
  node: Countries;
};

export type CountriesFilter = {
  alpha_2?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CountriesFilter>>;
  country_code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CountriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CountriesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CountriesInsertInput = {
  alpha_2?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CountriesInsertResponse = {
  __typename?: 'countriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type CountriesOrderBy = {
  alpha_2?: InputMaybe<OrderByDirection>;
  country_code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CountriesUpdateInput = {
  alpha_2?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CountriesUpdateResponse = {
  __typename?: 'countriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type Country_States = Node & {
  __typename?: 'country_states';
  countries?: Maybe<Countries>;
  country: Scalars['UUID']['output'];
  created_at: Scalars['Datetime']['output'];
  customer_addressesCollection?: Maybe<Customer_AddressesConnection>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  short_name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Country_StatesCustomer_AddressesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Customer_AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Customer_AddressesOrderBy>>;
};

export type Country_StatesConnection = {
  __typename?: 'country_statesConnection';
  edges: Array<Country_StatesEdge>;
  pageInfo: PageInfo;
};

export type Country_StatesDeleteResponse = {
  __typename?: 'country_statesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Country_States>;
};

export type Country_StatesEdge = {
  __typename?: 'country_statesEdge';
  cursor: Scalars['String']['output'];
  node: Country_States;
};

export type Country_StatesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Country_StatesFilter>>;
  country?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Country_StatesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Country_StatesFilter>>;
  short_name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Country_StatesInsertInput = {
  country?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Country_StatesInsertResponse = {
  __typename?: 'country_statesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Country_States>;
};

export type Country_StatesOrderBy = {
  country?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  short_name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Country_StatesUpdateInput = {
  country?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Country_StatesUpdateResponse = {
  __typename?: 'country_statesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Country_States>;
};

export type Coupon_Codes = Node & {
  __typename?: 'coupon_codes';
  amount?: Maybe<Scalars['Float']['output']>;
  code: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  percentage?: Maybe<Scalars['Float']['output']>;
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Coupon_CodesConnection = {
  __typename?: 'coupon_codesConnection';
  edges: Array<Coupon_CodesEdge>;
  pageInfo: PageInfo;
};

export type Coupon_CodesDeleteResponse = {
  __typename?: 'coupon_codesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Coupon_Codes>;
};

export type Coupon_CodesEdge = {
  __typename?: 'coupon_codesEdge';
  cursor: Scalars['String']['output'];
  node: Coupon_Codes;
};

export type Coupon_CodesFilter = {
  amount?: InputMaybe<FloatFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Coupon_CodesFilter>>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Coupon_CodesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Coupon_CodesFilter>>;
  percentage?: InputMaybe<FloatFilter>;
  store?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Coupon_CodesInsertInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  percentage?: InputMaybe<Scalars['Float']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Coupon_CodesInsertResponse = {
  __typename?: 'coupon_codesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Coupon_Codes>;
};

export type Coupon_CodesOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  percentage?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Coupon_CodesUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  percentage?: InputMaybe<Scalars['Float']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Coupon_CodesUpdateResponse = {
  __typename?: 'coupon_codesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Coupon_Codes>;
};

export type Currencies = Node & {
  __typename?: 'currencies';
  business_currencyCollection?: Maybe<Business_CurrencyConnection>;
  cartsCollection?: Maybe<CartsConnection>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  numeric_id: Scalars['String']['output'];
  productsCollection?: Maybe<ProductsConnection>;
  symbol?: Maybe<Scalars['String']['output']>;
  three_letter_code: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CurrenciesBusiness_CurrencyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Business_CurrencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Business_CurrencyOrderBy>>;
};


export type CurrenciesCartsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};


export type CurrenciesProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type CurrenciesConnection = {
  __typename?: 'currenciesConnection';
  edges: Array<CurrenciesEdge>;
  pageInfo: PageInfo;
};

export type CurrenciesDeleteResponse = {
  __typename?: 'currenciesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currencies>;
};

export type CurrenciesEdge = {
  __typename?: 'currenciesEdge';
  cursor: Scalars['String']['output'];
  node: Currencies;
};

export type CurrenciesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CurrenciesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CurrenciesFilter>;
  numeric_id?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CurrenciesFilter>>;
  symbol?: InputMaybe<StringFilter>;
  three_letter_code?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CurrenciesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numeric_id?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  three_letter_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CurrenciesInsertResponse = {
  __typename?: 'currenciesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currencies>;
};

export type CurrenciesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  numeric_id?: InputMaybe<OrderByDirection>;
  symbol?: InputMaybe<OrderByDirection>;
  three_letter_code?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CurrenciesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numeric_id?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  three_letter_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CurrenciesUpdateResponse = {
  __typename?: 'currenciesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currencies>;
};

export type Customer_Address_Types = Node & {
  __typename?: 'customer_address_types';
  cart_addressCollection?: Maybe<Cart_AddressConnection>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Customer_Address_TypesCart_AddressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_AddressOrderBy>>;
};

export type Customer_Address_TypesConnection = {
  __typename?: 'customer_address_typesConnection';
  edges: Array<Customer_Address_TypesEdge>;
  pageInfo: PageInfo;
};

export type Customer_Address_TypesDeleteResponse = {
  __typename?: 'customer_address_typesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Address_Types>;
};

export type Customer_Address_TypesEdge = {
  __typename?: 'customer_address_typesEdge';
  cursor: Scalars['String']['output'];
  node: Customer_Address_Types;
};

export type Customer_Address_TypesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Customer_Address_TypesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Customer_Address_TypesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Customer_Address_TypesFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Customer_Address_TypesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Customer_Address_TypesInsertResponse = {
  __typename?: 'customer_address_typesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Address_Types>;
};

export type Customer_Address_TypesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Customer_Address_TypesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Customer_Address_TypesUpdateResponse = {
  __typename?: 'customer_address_typesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Address_Types>;
};

export type Customer_Addresses = Node & {
  __typename?: 'customer_addresses';
  cart_addressCollection?: Maybe<Cart_AddressConnection>;
  company_name?: Maybe<Scalars['String']['output']>;
  countries?: Maybe<Countries>;
  country: Scalars['UUID']['output'];
  country_state: Scalars['UUID']['output'];
  country_states?: Maybe<Country_States>;
  created_at: Scalars['Datetime']['output'];
  customer: Scalars['UUID']['output'];
  customers?: Maybe<Customers>;
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  last_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number: Scalars['String']['output'];
  street_address: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  zip_code: Scalars['String']['output'];
};


export type Customer_AddressesCart_AddressCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Cart_AddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Cart_AddressOrderBy>>;
};

export type Customer_AddressesConnection = {
  __typename?: 'customer_addressesConnection';
  edges: Array<Customer_AddressesEdge>;
  pageInfo: PageInfo;
};

export type Customer_AddressesDeleteResponse = {
  __typename?: 'customer_addressesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Addresses>;
};

export type Customer_AddressesEdge = {
  __typename?: 'customer_addressesEdge';
  cursor: Scalars['String']['output'];
  node: Customer_Addresses;
};

export type Customer_AddressesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Customer_AddressesFilter>>;
  company_name?: InputMaybe<StringFilter>;
  country?: InputMaybe<UuidFilter>;
  country_state?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  customer?: InputMaybe<UuidFilter>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Customer_AddressesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Customer_AddressesFilter>>;
  phone_number?: InputMaybe<StringFilter>;
  street_address?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  zip_code?: InputMaybe<StringFilter>;
};

export type Customer_AddressesInsertInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['UUID']['input']>;
  country_state?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  street_address?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type Customer_AddressesInsertResponse = {
  __typename?: 'customer_addressesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Addresses>;
};

export type Customer_AddressesOrderBy = {
  company_name?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  country_state?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  customer?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  street_address?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  zip_code?: InputMaybe<OrderByDirection>;
};

export type Customer_AddressesUpdateInput = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['UUID']['input']>;
  country_state?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  street_address?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type Customer_AddressesUpdateResponse = {
  __typename?: 'customer_addressesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customer_Addresses>;
};

export type Customers = Node & {
  __typename?: 'customers';
  birth_date?: Maybe<Scalars['Date']['output']>;
  cartsCollection?: Maybe<CartsConnection>;
  created_at: Scalars['Datetime']['output'];
  customer_addressesCollection?: Maybe<Customer_AddressesConnection>;
  emailsCollection?: Maybe<EmailsConnection>;
  first_name: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  last_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone_numbersCollection?: Maybe<Phone_NumbersConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CustomersCartsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};


export type CustomersCustomer_AddressesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Customer_AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Customer_AddressesOrderBy>>;
};


export type CustomersEmailsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EmailsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EmailsOrderBy>>;
};


export type CustomersPhone_NumbersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Phone_NumbersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Phone_NumbersOrderBy>>;
};

export type CustomersConnection = {
  __typename?: 'customersConnection';
  edges: Array<CustomersEdge>;
  pageInfo: PageInfo;
};

export type CustomersDeleteResponse = {
  __typename?: 'customersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type CustomersEdge = {
  __typename?: 'customersEdge';
  cursor: Scalars['String']['output'];
  node: Customers;
};

export type CustomersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CustomersFilter>>;
  birth_date?: InputMaybe<DateFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CustomersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CustomersFilter>>;
  password?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CustomersInsertInput = {
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CustomersInsertResponse = {
  __typename?: 'customersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type CustomersOrderBy = {
  birth_date?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  password?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CustomersUpdateInput = {
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CustomersUpdateResponse = {
  __typename?: 'customersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type Emails = Node & {
  __typename?: 'emails';
  created_at: Scalars['Datetime']['output'];
  customer: Scalars['UUID']['output'];
  customers?: Maybe<Customers>;
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type EmailsConnection = {
  __typename?: 'emailsConnection';
  edges: Array<EmailsEdge>;
  pageInfo: PageInfo;
};

export type EmailsDeleteResponse = {
  __typename?: 'emailsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Emails>;
};

export type EmailsEdge = {
  __typename?: 'emailsEdge';
  cursor: Scalars['String']['output'];
  node: Emails;
};

export type EmailsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EmailsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  customer?: InputMaybe<UuidFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EmailsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EmailsFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type EmailsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EmailsInsertResponse = {
  __typename?: 'emailsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Emails>;
};

export type EmailsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  customer?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type EmailsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EmailsUpdateResponse = {
  __typename?: 'emailsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Emails>;
};

export type Header_Banners = Node & {
  __typename?: 'header_banners';
  banner_type: Scalars['UUID']['output'];
  banner_types?: Maybe<Banner_Types>;
  created_at: Scalars['Datetime']['output'];
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  subtitle?: Maybe<Scalars['String']['output']>;
  subtitle_complement?: Maybe<Scalars['String']['output']>;
  subtitle_remark?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Header_BannersConnection = {
  __typename?: 'header_bannersConnection';
  edges: Array<Header_BannersEdge>;
  pageInfo: PageInfo;
};

export type Header_BannersDeleteResponse = {
  __typename?: 'header_bannersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Header_Banners>;
};

export type Header_BannersEdge = {
  __typename?: 'header_bannersEdge';
  cursor: Scalars['String']['output'];
  node: Header_Banners;
};

export type Header_BannersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Header_BannersFilter>>;
  banner_type?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  cta_text?: InputMaybe<StringFilter>;
  cta_url?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Header_BannersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Header_BannersFilter>>;
  store?: InputMaybe<UuidFilter>;
  subtitle?: InputMaybe<StringFilter>;
  subtitle_complement?: InputMaybe<StringFilter>;
  subtitle_remark?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Header_BannersInsertInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_complement?: InputMaybe<Scalars['String']['input']>;
  subtitle_remark?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Header_BannersInsertResponse = {
  __typename?: 'header_bannersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Header_Banners>;
};

export type Header_BannersOrderBy = {
  banner_type?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  cta_text?: InputMaybe<OrderByDirection>;
  cta_url?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  subtitle?: InputMaybe<OrderByDirection>;
  subtitle_complement?: InputMaybe<OrderByDirection>;
  subtitle_remark?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Header_BannersUpdateInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_complement?: InputMaybe<Scalars['String']['input']>;
  subtitle_remark?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Header_BannersUpdateResponse = {
  __typename?: 'header_bannersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Header_Banners>;
};

export type Image_Banners = Node & {
  __typename?: 'image_banners';
  banner_type: Scalars['UUID']['output'];
  banner_types?: Maybe<Banner_Types>;
  created_at: Scalars['Datetime']['output'];
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  header: Scalars['String']['output'];
  header_remark?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Image_BannersConnection = {
  __typename?: 'image_bannersConnection';
  edges: Array<Image_BannersEdge>;
  pageInfo: PageInfo;
};

export type Image_BannersDeleteResponse = {
  __typename?: 'image_bannersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image_Banners>;
};

export type Image_BannersEdge = {
  __typename?: 'image_bannersEdge';
  cursor: Scalars['String']['output'];
  node: Image_Banners;
};

export type Image_BannersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Image_BannersFilter>>;
  banner_type?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  cta_text?: InputMaybe<StringFilter>;
  cta_url?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  header?: InputMaybe<StringFilter>;
  header_remark?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Image_BannersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Image_BannersFilter>>;
  store?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Image_BannersInsertInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  header_remark?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Image_BannersInsertResponse = {
  __typename?: 'image_bannersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image_Banners>;
};

export type Image_BannersOrderBy = {
  banner_type?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  cta_text?: InputMaybe<OrderByDirection>;
  cta_url?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  header?: InputMaybe<OrderByDirection>;
  header_remark?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Image_BannersUpdateInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  header_remark?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Image_BannersUpdateResponse = {
  __typename?: 'image_bannersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Image_Banners>;
};

export type Line_Items = Node & {
  __typename?: 'line_items';
  cart: Scalars['UUID']['output'];
  carts?: Maybe<Carts>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  product: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  quantity?: Maybe<Scalars['BigInt']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Line_ItemsConnection = {
  __typename?: 'line_itemsConnection';
  edges: Array<Line_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Line_ItemsDeleteResponse = {
  __typename?: 'line_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Line_Items>;
};

export type Line_ItemsEdge = {
  __typename?: 'line_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Line_Items;
};

export type Line_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Line_ItemsFilter>>;
  cart?: InputMaybe<UuidFilter>;
  comment?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Line_ItemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Line_ItemsFilter>>;
  price?: InputMaybe<FloatFilter>;
  product?: InputMaybe<UuidFilter>;
  quantity?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  weight?: InputMaybe<FloatFilter>;
};

export type Line_ItemsInsertInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Line_ItemsInsertResponse = {
  __typename?: 'line_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Line_Items>;
};

export type Line_ItemsOrderBy = {
  cart?: InputMaybe<OrderByDirection>;
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  product?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type Line_ItemsUpdateInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type Line_ItemsUpdateResponse = {
  __typename?: 'line_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Line_Items>;
};

export type Locales = Node & {
  __typename?: 'locales';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  locale: Scalars['String']['output'];
  locale_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type LocalesConnection = {
  __typename?: 'localesConnection';
  edges: Array<LocalesEdge>;
  pageInfo: PageInfo;
};

export type LocalesDeleteResponse = {
  __typename?: 'localesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Locales>;
};

export type LocalesEdge = {
  __typename?: 'localesEdge';
  cursor: Scalars['String']['output'];
  node: Locales;
};

export type LocalesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LocalesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  locale?: InputMaybe<StringFilter>;
  locale_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LocalesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LocalesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type LocalesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type LocalesInsertResponse = {
  __typename?: 'localesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Locales>;
};

export type LocalesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  locale?: InputMaybe<OrderByDirection>;
  locale_name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type LocalesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locale_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type LocalesUpdateResponse = {
  __typename?: 'localesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Locales>;
};

export type Offer_Banners = Node & {
  __typename?: 'offer_banners';
  banner_type: Scalars['UUID']['output'];
  banner_types?: Maybe<Banner_Types>;
  created_at: Scalars['Datetime']['output'];
  cta_text?: Maybe<Scalars['String']['output']>;
  cta_url?: Maybe<Scalars['String']['output']>;
  header: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  subtitle?: Maybe<Scalars['String']['output']>;
  subtitle_remark?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  valid_until?: Maybe<Scalars['Datetime']['output']>;
};

export type Offer_BannersConnection = {
  __typename?: 'offer_bannersConnection';
  edges: Array<Offer_BannersEdge>;
  pageInfo: PageInfo;
};

export type Offer_BannersDeleteResponse = {
  __typename?: 'offer_bannersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Offer_Banners>;
};

export type Offer_BannersEdge = {
  __typename?: 'offer_bannersEdge';
  cursor: Scalars['String']['output'];
  node: Offer_Banners;
};

export type Offer_BannersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Offer_BannersFilter>>;
  banner_type?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  cta_text?: InputMaybe<StringFilter>;
  cta_url?: InputMaybe<StringFilter>;
  header?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Offer_BannersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Offer_BannersFilter>>;
  store?: InputMaybe<UuidFilter>;
  subtitle?: InputMaybe<StringFilter>;
  subtitle_remark?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  valid_until?: InputMaybe<DatetimeFilter>;
};

export type Offer_BannersInsertInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_remark?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  valid_until?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Offer_BannersInsertResponse = {
  __typename?: 'offer_bannersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Offer_Banners>;
};

export type Offer_BannersOrderBy = {
  banner_type?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  cta_text?: InputMaybe<OrderByDirection>;
  cta_url?: InputMaybe<OrderByDirection>;
  header?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  subtitle?: InputMaybe<OrderByDirection>;
  subtitle_remark?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  valid_until?: InputMaybe<OrderByDirection>;
};

export type Offer_BannersUpdateInput = {
  banner_type?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cta_text?: InputMaybe<Scalars['String']['input']>;
  cta_url?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_remark?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  valid_until?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Offer_BannersUpdateResponse = {
  __typename?: 'offer_bannersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Offer_Banners>;
};

export type Orders = Node & {
  __typename?: 'orders';
  cart: Scalars['UUID']['output'];
  carts?: Maybe<Carts>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type OrdersConnection = {
  __typename?: 'ordersConnection';
  edges: Array<OrdersEdge>;
  pageInfo: PageInfo;
};

export type OrdersDeleteResponse = {
  __typename?: 'ordersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersEdge = {
  __typename?: 'ordersEdge';
  cursor: Scalars['String']['output'];
  node: Orders;
};

export type OrdersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrdersFilter>>;
  cart?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrdersFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrdersFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type OrdersInsertInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OrdersInsertResponse = {
  __typename?: 'ordersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersOrderBy = {
  cart?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type OrdersUpdateInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type OrdersUpdateResponse = {
  __typename?: 'ordersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type Payment_Method_Types = Node & {
  __typename?: 'payment_method_types';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  payment_methodsCollection?: Maybe<Payment_MethodsConnection>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Payment_Method_TypesPayment_MethodsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_MethodsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_MethodsOrderBy>>;
};

export type Payment_Method_TypesConnection = {
  __typename?: 'payment_method_typesConnection';
  edges: Array<Payment_Method_TypesEdge>;
  pageInfo: PageInfo;
};

export type Payment_Method_TypesDeleteResponse = {
  __typename?: 'payment_method_typesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Method_Types>;
};

export type Payment_Method_TypesEdge = {
  __typename?: 'payment_method_typesEdge';
  cursor: Scalars['String']['output'];
  node: Payment_Method_Types;
};

export type Payment_Method_TypesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Payment_Method_TypesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Payment_Method_TypesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Payment_Method_TypesFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Payment_Method_TypesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Payment_Method_TypesInsertResponse = {
  __typename?: 'payment_method_typesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Method_Types>;
};

export type Payment_Method_TypesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Payment_Method_TypesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Payment_Method_TypesUpdateResponse = {
  __typename?: 'payment_method_typesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Method_Types>;
};

export type Payment_Methods = Node & {
  __typename?: 'payment_methods';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  is_active: Scalars['Boolean']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  payment_method_type: Scalars['UUID']['output'];
  payment_method_types?: Maybe<Payment_Method_Types>;
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  transactionsCollection?: Maybe<TransactionsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Payment_MethodsTransactionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TransactionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransactionsOrderBy>>;
};

export type Payment_MethodsConnection = {
  __typename?: 'payment_methodsConnection';
  edges: Array<Payment_MethodsEdge>;
  pageInfo: PageInfo;
};

export type Payment_MethodsDeleteResponse = {
  __typename?: 'payment_methodsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Methods>;
};

export type Payment_MethodsEdge = {
  __typename?: 'payment_methodsEdge';
  cursor: Scalars['String']['output'];
  node: Payment_Methods;
};

export type Payment_MethodsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Payment_MethodsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Payment_MethodsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Payment_MethodsFilter>>;
  payment_method_type?: InputMaybe<UuidFilter>;
  store?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Payment_MethodsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  payment_method_type?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Payment_MethodsInsertResponse = {
  __typename?: 'payment_methodsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Methods>;
};

export type Payment_MethodsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  payment_method_type?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Payment_MethodsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  payment_method_type?: InputMaybe<Scalars['UUID']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Payment_MethodsUpdateResponse = {
  __typename?: 'payment_methodsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Methods>;
};

export type Payments = Node & {
  __typename?: 'payments';
  cart: Scalars['UUID']['output'];
  carts?: Maybe<Carts>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type PaymentsConnection = {
  __typename?: 'paymentsConnection';
  edges: Array<PaymentsEdge>;
  pageInfo: PageInfo;
};

export type PaymentsDeleteResponse = {
  __typename?: 'paymentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type PaymentsEdge = {
  __typename?: 'paymentsEdge';
  cursor: Scalars['String']['output'];
  node: Payments;
};

export type PaymentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PaymentsFilter>>;
  cart?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PaymentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PaymentsFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type PaymentsInsertInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PaymentsInsertResponse = {
  __typename?: 'paymentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type PaymentsOrderBy = {
  cart?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type PaymentsUpdateInput = {
  cart?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PaymentsUpdateResponse = {
  __typename?: 'paymentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type Phone_Numbers = Node & {
  __typename?: 'phone_numbers';
  created_at: Scalars['Datetime']['output'];
  customer: Scalars['UUID']['output'];
  customers?: Maybe<Customers>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Phone_NumbersConnection = {
  __typename?: 'phone_numbersConnection';
  edges: Array<Phone_NumbersEdge>;
  pageInfo: PageInfo;
};

export type Phone_NumbersDeleteResponse = {
  __typename?: 'phone_numbersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Phone_Numbers>;
};

export type Phone_NumbersEdge = {
  __typename?: 'phone_numbersEdge';
  cursor: Scalars['String']['output'];
  node: Phone_Numbers;
};

export type Phone_NumbersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Phone_NumbersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  customer?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Phone_NumbersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Phone_NumbersFilter>>;
  phone_number?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Phone_NumbersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Phone_NumbersInsertResponse = {
  __typename?: 'phone_numbersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Phone_Numbers>;
};

export type Phone_NumbersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  customer?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Phone_NumbersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Phone_NumbersUpdateResponse = {
  __typename?: 'phone_numbersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Phone_Numbers>;
};

export type Product_Category = Node & {
  __typename?: 'product_category';
  categories?: Maybe<Categories>;
  category: Scalars['UUID']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Product_CategoryConnection = {
  __typename?: 'product_categoryConnection';
  edges: Array<Product_CategoryEdge>;
  pageInfo: PageInfo;
};

export type Product_CategoryDeleteResponse = {
  __typename?: 'product_categoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Category>;
};

export type Product_CategoryEdge = {
  __typename?: 'product_categoryEdge';
  cursor: Scalars['String']['output'];
  node: Product_Category;
};

export type Product_CategoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_CategoryFilter>>;
  category?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_CategoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_CategoryFilter>>;
  product?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Product_CategoryInsertInput = {
  category?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_CategoryInsertResponse = {
  __typename?: 'product_categoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Category>;
};

export type Product_CategoryOrderBy = {
  category?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Product_CategoryUpdateInput = {
  category?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_CategoryUpdateResponse = {
  __typename?: 'product_categoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Category>;
};

export type Product_Tag = Node & {
  __typename?: 'product_tag';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product: Scalars['UUID']['output'];
  product_tags?: Maybe<Product_Tags>;
  products?: Maybe<Products>;
  tag: Scalars['UUID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Product_TagConnection = {
  __typename?: 'product_tagConnection';
  edges: Array<Product_TagEdge>;
  pageInfo: PageInfo;
};

export type Product_TagDeleteResponse = {
  __typename?: 'product_tagDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tag>;
};

export type Product_TagEdge = {
  __typename?: 'product_tagEdge';
  cursor: Scalars['String']['output'];
  node: Product_Tag;
};

export type Product_TagFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_TagFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_TagFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_TagFilter>>;
  product?: InputMaybe<UuidFilter>;
  tag?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Product_TagInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  tag?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_TagInsertResponse = {
  __typename?: 'product_tagInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tag>;
};

export type Product_TagOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product?: InputMaybe<OrderByDirection>;
  tag?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Product_TagUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  tag?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_TagUpdateResponse = {
  __typename?: 'product_tagUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tag>;
};

export type Product_Tags = Node & {
  __typename?: 'product_tags';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  is_discount_tag: Scalars['Boolean']['output'];
  is_general_tag: Scalars['Boolean']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_tagCollection?: Maybe<Product_TagConnection>;
  tag: Scalars['String']['output'];
  tag_types?: Maybe<Tag_Types>;
  type: Scalars['UUID']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Product_TagsProduct_TagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_TagOrderBy>>;
};

export type Product_TagsConnection = {
  __typename?: 'product_tagsConnection';
  edges: Array<Product_TagsEdge>;
  pageInfo: PageInfo;
};

export type Product_TagsDeleteResponse = {
  __typename?: 'product_tagsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tags>;
};

export type Product_TagsEdge = {
  __typename?: 'product_tagsEdge';
  cursor: Scalars['String']['output'];
  node: Product_Tags;
};

export type Product_TagsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_TagsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_discount_tag?: InputMaybe<BooleanFilter>;
  is_general_tag?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_TagsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_TagsFilter>>;
  tag?: InputMaybe<StringFilter>;
  type?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Product_TagsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_discount_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_general_tag?: InputMaybe<Scalars['Boolean']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_TagsInsertResponse = {
  __typename?: 'product_tagsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tags>;
};

export type Product_TagsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_discount_tag?: InputMaybe<OrderByDirection>;
  is_general_tag?: InputMaybe<OrderByDirection>;
  tag?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Product_TagsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_discount_tag?: InputMaybe<Scalars['Boolean']['input']>;
  is_general_tag?: InputMaybe<Scalars['Boolean']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_TagsUpdateResponse = {
  __typename?: 'product_tagsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Tags>;
};

export type Product_Weights = Node & {
  __typename?: 'product_weights';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  weight_unit: Scalars['UUID']['output'];
  weight_units?: Maybe<Weight_Units>;
};

export type Product_WeightsConnection = {
  __typename?: 'product_weightsConnection';
  edges: Array<Product_WeightsEdge>;
  pageInfo: PageInfo;
};

export type Product_WeightsDeleteResponse = {
  __typename?: 'product_weightsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Weights>;
};

export type Product_WeightsEdge = {
  __typename?: 'product_weightsEdge';
  cursor: Scalars['String']['output'];
  node: Product_Weights;
};

export type Product_WeightsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_WeightsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_WeightsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_WeightsFilter>>;
  product?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  weight_unit?: InputMaybe<UuidFilter>;
};

export type Product_WeightsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  weight_unit?: InputMaybe<Scalars['UUID']['input']>;
};

export type Product_WeightsInsertResponse = {
  __typename?: 'product_weightsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Weights>;
};

export type Product_WeightsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  product?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  weight_unit?: InputMaybe<OrderByDirection>;
};

export type Product_WeightsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  product?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  weight_unit?: InputMaybe<Scalars['UUID']['input']>;
};

export type Product_WeightsUpdateResponse = {
  __typename?: 'product_weightsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Weights>;
};

export type Products = Node & {
  __typename?: 'products';
  available_quantity?: Maybe<Scalars['BigInt']['output']>;
  created_at: Scalars['Datetime']['output'];
  currencies?: Maybe<Currencies>;
  currency: Scalars['UUID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discounted_price?: Maybe<Scalars['Float']['output']>;
  discounted_until?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  line_itemsCollection?: Maybe<Line_ItemsConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product_categoryCollection?: Maybe<Product_CategoryConnection>;
  product_tagCollection?: Maybe<Product_TagConnection>;
  product_weightsCollection?: Maybe<Product_WeightsConnection>;
  rating?: Maybe<Scalars['Int']['output']>;
  render_order?: Maybe<Scalars['BigInt']['output']>;
  sku: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type ProductsLine_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Line_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Line_ItemsOrderBy>>;
};


export type ProductsProduct_CategoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoryOrderBy>>;
};


export type ProductsProduct_TagCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_TagOrderBy>>;
};


export type ProductsProduct_WeightsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_WeightsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_WeightsOrderBy>>;
};

export type ProductsConnection = {
  __typename?: 'productsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
};

export type ProductsDeleteResponse = {
  __typename?: 'productsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsEdge = {
  __typename?: 'productsEdge';
  cursor: Scalars['String']['output'];
  node: Products;
};

export type ProductsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductsFilter>>;
  available_quantity?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<UuidFilter>;
  description?: InputMaybe<StringFilter>;
  discounted_price?: InputMaybe<FloatFilter>;
  discounted_until?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  image_url?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  price?: InputMaybe<FloatFilter>;
  rating?: InputMaybe<IntFilter>;
  render_order?: InputMaybe<BigIntFilter>;
  sku?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  store?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ProductsInsertInput = {
  available_quantity?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discounted_price?: InputMaybe<Scalars['Float']['input']>;
  discounted_until?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  render_order?: InputMaybe<Scalars['BigInt']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProductsInsertResponse = {
  __typename?: 'productsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  available_quantity?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  discounted_price?: InputMaybe<OrderByDirection>;
  discounted_until?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  rating?: InputMaybe<OrderByDirection>;
  render_order?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  available_quantity?: InputMaybe<Scalars['BigInt']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discounted_price?: InputMaybe<Scalars['Float']['input']>;
  discounted_until?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  render_order?: InputMaybe<Scalars['BigInt']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProductsUpdateResponse = {
  __typename?: 'productsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Store_Features = Node & {
  __typename?: 'store_features';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  render_order?: Maybe<Scalars['Int']['output']>;
  store: Scalars['UUID']['output'];
  stores?: Maybe<Stores>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type Store_FeaturesConnection = {
  __typename?: 'store_featuresConnection';
  edges: Array<Store_FeaturesEdge>;
  pageInfo: PageInfo;
};

export type Store_FeaturesDeleteResponse = {
  __typename?: 'store_featuresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Store_Features>;
};

export type Store_FeaturesEdge = {
  __typename?: 'store_featuresEdge';
  cursor: Scalars['String']['output'];
  node: Store_Features;
};

export type Store_FeaturesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Store_FeaturesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  icon_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Store_FeaturesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Store_FeaturesFilter>>;
  render_order?: InputMaybe<IntFilter>;
  store?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Store_FeaturesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  render_order?: InputMaybe<Scalars['Int']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Store_FeaturesInsertResponse = {
  __typename?: 'store_featuresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Store_Features>;
};

export type Store_FeaturesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  icon_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  render_order?: InputMaybe<OrderByDirection>;
  store?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Store_FeaturesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  render_order?: InputMaybe<Scalars['Int']['input']>;
  store?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Store_FeaturesUpdateResponse = {
  __typename?: 'store_featuresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Store_Features>;
};

export type Stores = Node & {
  __typename?: 'stores';
  business: Scalars['UUID']['output'];
  businesses?: Maybe<Businesses>;
  cartsCollection?: Maybe<CartsConnection>;
  categoriesCollection?: Maybe<CategoriesConnection>;
  coupon_codesCollection?: Maybe<Coupon_CodesConnection>;
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  header_bannersCollection?: Maybe<Header_BannersConnection>;
  id: Scalars['UUID']['output'];
  image_bannersCollection?: Maybe<Image_BannersConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  offer_bannersCollection?: Maybe<Offer_BannersConnection>;
  payment_methodsCollection?: Maybe<Payment_MethodsConnection>;
  productsCollection?: Maybe<ProductsConnection>;
  store_featuresCollection?: Maybe<Store_FeaturesConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type StoresCartsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};


export type StoresCategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


export type StoresCoupon_CodesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Coupon_CodesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Coupon_CodesOrderBy>>;
};


export type StoresHeader_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Header_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Header_BannersOrderBy>>;
};


export type StoresImage_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Image_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Image_BannersOrderBy>>;
};


export type StoresOffer_BannersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Offer_BannersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Offer_BannersOrderBy>>;
};


export type StoresPayment_MethodsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_MethodsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_MethodsOrderBy>>;
};


export type StoresProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


export type StoresStore_FeaturesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Store_FeaturesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Store_FeaturesOrderBy>>;
};

export type StoresConnection = {
  __typename?: 'storesConnection';
  edges: Array<StoresEdge>;
  pageInfo: PageInfo;
};

export type StoresDeleteResponse = {
  __typename?: 'storesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stores>;
};

export type StoresEdge = {
  __typename?: 'storesEdge';
  cursor: Scalars['String']['output'];
  node: Stores;
};

export type StoresFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<StoresFilter>>;
  business?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<StoresFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<StoresFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type StoresInsertInput = {
  business?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type StoresInsertResponse = {
  __typename?: 'storesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stores>;
};

export type StoresOrderBy = {
  business?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type StoresUpdateInput = {
  business?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type StoresUpdateResponse = {
  __typename?: 'storesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stores>;
};

export type Tag_Types = Node & {
  __typename?: 'tag_types';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_tagsCollection?: Maybe<Product_TagsConnection>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Tag_TypesProduct_TagsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_TagsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_TagsOrderBy>>;
};

export type Tag_TypesConnection = {
  __typename?: 'tag_typesConnection';
  edges: Array<Tag_TypesEdge>;
  pageInfo: PageInfo;
};

export type Tag_TypesDeleteResponse = {
  __typename?: 'tag_typesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tag_Types>;
};

export type Tag_TypesEdge = {
  __typename?: 'tag_typesEdge';
  cursor: Scalars['String']['output'];
  node: Tag_Types;
};

export type Tag_TypesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Tag_TypesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Tag_TypesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Tag_TypesFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Tag_TypesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Tag_TypesInsertResponse = {
  __typename?: 'tag_typesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tag_Types>;
};

export type Tag_TypesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Tag_TypesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Tag_TypesUpdateResponse = {
  __typename?: 'tag_typesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tag_Types>;
};

export type Transactions = Node & {
  __typename?: 'transactions';
  amount: Scalars['Float']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  payment_method: Scalars['UUID']['output'];
  payment_methods?: Maybe<Payment_Methods>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type TransactionsConnection = {
  __typename?: 'transactionsConnection';
  edges: Array<TransactionsEdge>;
  pageInfo: PageInfo;
};

export type TransactionsDeleteResponse = {
  __typename?: 'transactionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Transactions>;
};

export type TransactionsEdge = {
  __typename?: 'transactionsEdge';
  cursor: Scalars['String']['output'];
  node: Transactions;
};

export type TransactionsFilter = {
  amount?: InputMaybe<FloatFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TransactionsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TransactionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TransactionsFilter>>;
  payment_method?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type TransactionsInsertInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  payment_method?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TransactionsInsertResponse = {
  __typename?: 'transactionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Transactions>;
};

export type TransactionsOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  payment_method?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type TransactionsUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  payment_method?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TransactionsUpdateResponse = {
  __typename?: 'transactionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Transactions>;
};

export enum Weight_Unit {
  Kg = 'KG',
  Ounce = 'OUNCE'
}

/** Boolean expression comparing fields on type "weight_unit" */
export type Weight_UnitFilter = {
  eq?: InputMaybe<Weight_Unit>;
  in?: InputMaybe<Array<Weight_Unit>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Weight_Unit>;
};

export type Weight_Units = Node & {
  __typename?: 'weight_units';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  plural_name: Scalars['String']['output'];
  product_weightsCollection?: Maybe<Product_WeightsConnection>;
  singular_name: Scalars['String']['output'];
  unit: Weight_Unit;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Weight_UnitsProduct_WeightsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_WeightsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_WeightsOrderBy>>;
};

export type Weight_UnitsConnection = {
  __typename?: 'weight_unitsConnection';
  edges: Array<Weight_UnitsEdge>;
  pageInfo: PageInfo;
};

export type Weight_UnitsDeleteResponse = {
  __typename?: 'weight_unitsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Weight_Units>;
};

export type Weight_UnitsEdge = {
  __typename?: 'weight_unitsEdge';
  cursor: Scalars['String']['output'];
  node: Weight_Units;
};

export type Weight_UnitsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Weight_UnitsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Weight_UnitsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Weight_UnitsFilter>>;
  plural_name?: InputMaybe<StringFilter>;
  singular_name?: InputMaybe<StringFilter>;
  unit?: InputMaybe<Weight_UnitFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Weight_UnitsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  plural_name?: InputMaybe<Scalars['String']['input']>;
  singular_name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Weight_Unit>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Weight_UnitsInsertResponse = {
  __typename?: 'weight_unitsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Weight_Units>;
};

export type Weight_UnitsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  plural_name?: InputMaybe<OrderByDirection>;
  singular_name?: InputMaybe<OrderByDirection>;
  unit?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Weight_UnitsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  plural_name?: InputMaybe<Scalars['String']['input']>;
  singular_name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Weight_Unit>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Weight_UnitsUpdateResponse = {
  __typename?: 'weight_unitsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Weight_Units>;
};
