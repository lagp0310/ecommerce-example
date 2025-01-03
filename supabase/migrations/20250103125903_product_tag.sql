create table
  public.product_tag (
    id uuid not null default gen_random_uuid (),
    product uuid not null,
    tag uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint product_tag_pkey primary key (id),
    constraint product_tag_product_fkey foreign key (
      product
    ) references products (id) on update cascade on delete cascade,
    constraint product_tag_tag_fkey foreign key (
      tag
    ) references product_tags (id) on update cascade on delete cascade
  ) tablespace pg_default;