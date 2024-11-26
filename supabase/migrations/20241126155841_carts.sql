create table
  public.carts (
    id uuid not null default gen_random_uuid (),
    customer uuid null,
    anonymous_id uuid null default gen_random_uuid (),
    store uuid not null,
    currency uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint carts_pkey primary key (id),
    constraint carts_customer_fkey foreign key (customer) references customers (id) on update cascade on delete cascade,
    constraint carts_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade,
    constraint carts_currency_fkey foreign key (currency) references currencies (id) on update cascade on delete cascade
  ) tablespace pg_default;