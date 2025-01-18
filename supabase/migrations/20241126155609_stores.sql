create table
  public.stores (
    id uuid not null default gen_random_uuid (),
    name TEXT not null,
    description text null,
    business uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint stores_pkey primary key (id),
    constraint stores_name_key unique (name),
    constraint stores_business_fkey foreign key (business) references businesses (id) on update cascade on delete cascade
  ) tablespace pg_default;