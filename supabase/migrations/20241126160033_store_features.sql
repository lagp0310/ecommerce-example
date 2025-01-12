create table
  public.store_features (
    id uuid not null default gen_random_uuid (),
    title TEXT not null,
    description TEXT null,
    icon_name text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    store uuid not null,
    render_order smallint null,
    constraint store_features_pkey primary key (id),
    constraint store_features_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;