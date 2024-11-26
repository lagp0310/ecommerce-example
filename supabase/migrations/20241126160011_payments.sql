create table
  public.payments (
    id uuid not null default gen_random_uuid (),
    cart uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint payments_pkey primary key (id),
    constraint payments_cart_fkey foreign key (cart) references carts (id) on update cascade on delete cascade
  ) tablespace pg_default;