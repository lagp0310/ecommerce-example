create table
  public.tag_types (
    id uuid not null default gen_random_uuid (),
    type text not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint tag_types_pkey primary key (id),
    constraint tag_types_type_key unique (
      type
    )
  ) tablespace pg_default;