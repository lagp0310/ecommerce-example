create table
  public.image_banners (
    id uuid not null default gen_random_uuid (),
    title character varying null,
    header character varying not null,
    header_remark character varying null,
    description character varying null,
    cta_text character varying null,
    cta_url text null,
    banner_type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    image_url text null,
    store uuid not null,
    constraint image_banners_pkey primary key (id),
    constraint image_banners_banner_type_fkey foreign key (banner_type) references banner_types (id) on update cascade on delete cascade,
    constraint image_banners_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;