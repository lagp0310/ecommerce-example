create table
  public.product_category (
    id uuid not null default gen_random_uuid (),
    product uuid not null,
    category uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint product_category_pkey primary key (id),
    constraint product_category_category_fkey foreign key (category) references categories (id) on update cascade on delete cascade,
    constraint product_category_product_fkey foreign key (product) references products (id) on update cascade on delete cascade
  ) tablespace pg_default;