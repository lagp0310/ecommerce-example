create table
  public.customers (
    id uuid not null default gen_random_uuid (),
    first_name TEXT not null,
    last_name TEXT not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    birth_date date null,
    password text null,
    constraint customers_pkey primary key (id)
  ) tablespace pg_default;