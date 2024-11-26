create table
  public.offer_banners (
    id uuid not null default gen_random_uuid (),
    title character varying null,
    header character varying not null,
    cta_text character varying null,
    cta_url text null,
    subtitle character varying null,
    subtitle_remark character varying null,
    valid_until timestamp with time zone null,
    banner_type uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint offer_banners_pkey primary key (id),
    constraint offer_banners_banner_type_fkey foreign key (banner_type) references banner_types (id) on update cascade on delete cascade
  ) tablespace pg_default;