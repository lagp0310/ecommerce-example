create table
  public.banner_types (
    id uuid not null default gen_random_uuid (),
    type character varying not null,
    description text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint banner_types_pkey primary key (id),
    constraint banner_types_type_key unique (
      type
    )
  ) tablespace pg_default;