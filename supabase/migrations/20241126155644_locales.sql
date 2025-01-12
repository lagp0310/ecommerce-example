create table
  public.locales (
    id uuid not null default gen_random_uuid (),
    locale TEXT not null,
    locale_name TEXT not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint locales_pkey primary key (id),
    constraint locales_locale_key unique (locale),
    constraint locales_locale_name_key unique (locale_name)
  ) tablespace pg_default;