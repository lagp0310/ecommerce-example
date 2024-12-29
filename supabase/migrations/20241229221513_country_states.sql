create table
  public.country_states (
    id uuid not null default gen_random_uuid (),
    name text not null,
    short_name text not null,
    country uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint country_states_pkey primary key (id),
    constraint country_states_name_key unique (name),
    constraint country_states_short_name_key unique (short_name),
    constraint country_states_country_fkey foreign key (country) references countries (id) on update cascade on delete cascade
  ) tablespace pg_default;