create table
  public.products (
    id uuid not null default gen_random_uuid (),
    name TEXT not null,
    price double precision not null,
    discounted_price double precision null,
    currency uuid not null,
    rating smallint null default '0'::smallint,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    sku TEXT not null,
    store uuid not null,
    discounted_until timestamp with time zone null,
    description text null,
    image_url text null,
    available_quantity bigint null,
    slug text null,
    render_order bigint null,
    constraint products_pkey primary key (id),
    constraint products_sku_key unique (sku),
    constraint products_currency_fkey foreign key (currency) references currencies (id) on update cascade on delete set null,
    constraint products_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;