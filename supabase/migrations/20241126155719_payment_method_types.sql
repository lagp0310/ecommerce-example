create table
  public.payment_method_types (
    id uuid not null default gen_random_uuid (),
    type text not null,
    description text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint payment_method_names_pkey primary key (id)
  ) tablespace pg_default;