create table
  public.product_tags (
    id uuid not null default gen_random_uuid (),
    product uuid null,
    tag text not null,
    type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    is_general_tag boolean not null,
    is_discount_tag boolean not null,
    constraint product_tags_pkey primary key (id),
    constraint product_tags_product_fkey foreign key (product) references products (id) on update cascade on delete cascade
  ) tablespace pg_default;