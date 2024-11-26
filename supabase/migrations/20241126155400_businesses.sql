create table
  public.businesses (
    id uuid not null default gen_random_uuid (),
    name character varying not null,
    description text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint businesses_pkey primary key (id),
    constraint businesses_name_key unique (name)
  ) tablespace pg_default;