create table
  public.phone_numbers (
    id uuid not null default gen_random_uuid (),
    phone_number TEXT not null,
    customer uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint phone_numbers_pkey primary key (id),
    constraint phone_numbers_phone_number_key unique (phone_number),
    constraint phone_numbers_customer_fkey foreign key (customer) references customers (id) on update cascade on delete cascade
  ) tablespace pg_default;