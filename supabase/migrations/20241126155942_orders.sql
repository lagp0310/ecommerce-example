create table
  public.orders (
    id uuid not null default gen_random_uuid (),
    cart uuid not null,
    notes text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint orders_pkey primary key (id),
    constraint orders_cart_fkey foreign key (cart) references carts (id) on update cascade on delete cascade
  ) tablespace pg_default;