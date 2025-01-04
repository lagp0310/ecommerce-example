create table
  public.customer_addresses (
    id uuid not null default gen_random_uuid (),
    address_type uuid not null,
    street_address text not null,
    first_name text not null,
    last_name text not null,
    company_name text null,
    country uuid not null,
    country_state uuid not null,
    zip_code text not null,
    customer uuid not null,
    email text not null,
    phone_number text not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint customer_addresses_pkey primary key (id),
    constraint customer_addresses_customer_address_type_fkey foreign key (address_type) references customer_address_types (id) on update cascade on delete cascade,
    constraint customer_addresses_customer_fkey foreign key (customer) references customers (id) on update cascade on delete cascade,
    constraint customer_addresses_country_fkey foreign key (country) references countries (id) on update cascade on delete cascade,
    constraint customer_addresses_country_state_fkey foreign key (country_state) references country_states (id) on update cascade on delete cascade
  ) tablespace pg_default;