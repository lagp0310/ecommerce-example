create table
  public.cart_address (
    id uuid not null default gen_random_uuid (),
    cart uuid not null,
    address uuid not null,
    address_type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint cart_address_pkey primary key (id),
    constraint cart_address_cart_fkey foreign key (cart) references carts (id) on update cascade on delete cascade,
    constraint cart_address_address_fkey foreign key (address) references customer_addresses (id) on update cascade on delete cascade,
    constraint cart_address_address_type_fkey foreign key (address_type) references customer_address_types (id) on update cascade on delete cascade
  ) tablespace pg_default;