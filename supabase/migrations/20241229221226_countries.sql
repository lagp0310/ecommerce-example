create table
  public.countries (
    id uuid not null default gen_random_uuid (),
    name text not null,
    alpha_2 text not null,
    country_code text not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint countries_pkey primary key (id),
    constraint countries_alpha_2_key unique (alpha_2),
    constraint countries_country_code_key unique (country_code)
  ) tablespace pg_default;