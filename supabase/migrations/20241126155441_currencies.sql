create table
  public.currencies (
    id uuid not null default gen_random_uuid (),
    three_letter_code TEXT not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    name TEXT not null,
    numeric_id TEXT not null,
    symbol text null,
    constraint currencies_pkey primary key (id),
    constraint currencies_three_letter_code_key unique (three_letter_code),
    constraint currencies_number_id_key unique (numeric_id)
  ) tablespace pg_default;