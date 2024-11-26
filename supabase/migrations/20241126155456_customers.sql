create table
  public.customers (
    id uuid not null default gen_random_uuid (),
    first_name character varying not null,
    last_name character varying not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    birth_date date null,
    password text not null,
    billing_address text not null,
    shipping_address text not null,
    constraint customers_pkey primary key (id)
  ) tablespace pg_default;