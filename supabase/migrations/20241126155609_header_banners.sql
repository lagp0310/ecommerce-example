create table
  public.header_banners (
    id uuid not null default gen_random_uuid (),
    title character varying not null,
    description text null,
    cta_text character varying null,
    cta_url text null,
    banner_type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    subtitle character varying null,
    subtitle_remark character varying null,
    subtitle_complement character varying null,
    constraint header_banners_pkey primary key (id),
    constraint header_banners_banner_type_fkey foreign key (banner_type) references banner_types (id) on update cascade on delete cascade
  ) tablespace pg_default;