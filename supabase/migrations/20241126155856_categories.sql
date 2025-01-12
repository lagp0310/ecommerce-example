create table
  public.categories (
    id uuid not null default gen_random_uuid (),
    name TEXT not null,
    description text null,
    store uuid null,
    image_url text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint categories_pkey primary key (id),
    constraint categories_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;