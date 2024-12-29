create table
  public.zip_codes (
    id uuid not null default gen_random_uuid (),
    state uuid not null,
    zip_code text not null,
    county text not null,
    city text not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint zip_codes_pkey primary key (id),
    constraint zip_codes_zip_code_key unique (zip_code),
    constraint zip_codes_state_fkey foreign key (state) references country_states (id) on update cascade on delete cascade
  ) tablespace pg_default;