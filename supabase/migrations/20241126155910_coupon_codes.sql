create table
  public.coupon_codes (
    id uuid not null default gen_random_uuid (),
    code character varying not null,
    store uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    percentage double precision null,
    amount double precision null,
    constraint coupon_codes_pkey primary key (id),
    constraint coupon_codes_code_key unique (code),
    constraint coupon_codes_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade
  ) tablespace pg_default;