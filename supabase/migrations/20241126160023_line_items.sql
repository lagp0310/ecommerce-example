create table
  public.line_items (
    id uuid not null default gen_random_uuid (),
    cart uuid not null,
    quantity bigint not null,
    comment text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    product uuid not null,
    price double precision null,
    constraint line_items_pkey primary key (id),
    constraint line_items_cart_fkey foreign key (cart) references carts (id) on update cascade on delete cascade,
    constraint line_items_product_fkey foreign key (product) references products (id) on update cascade on delete cascade
  ) tablespace pg_default;