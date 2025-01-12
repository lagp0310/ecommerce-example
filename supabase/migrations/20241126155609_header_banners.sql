create table
  public.header_banners (
    id uuid not null default gen_random_uuid (),
    title TEXT not null,
    description text null,
    cta_text TEXT null,
    cta_url text null,
    banner_type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    subtitle TEXT null,
    subtitle_remark TEXT null,
    subtitle_complement TEXT null,
    store uuid not null,
    constraint header_banners_pkey primary key (id),
    constraint header_banners_banner_type_fkey foreign key (banner_type) references banner_types (id) on update cascade on delete cascade,
    constraint header_banners_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;