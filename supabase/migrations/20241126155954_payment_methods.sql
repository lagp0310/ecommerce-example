create table
  public.payment_methods (
    id uuid not null default gen_random_uuid (),
    store uuid not null,
    is_active boolean not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    payment_method_type uuid null,
    constraint payment_methods_pkey primary key (id),
    constraint payment_methods_store_fkey foreign key (store) references stores (id) on update cascade on delete cascade,
    constraint payment_methods_payment_method_type_fkey foreign key (payment_method_type) references payment_method_types (id) on update cascade on delete cascade
  ) tablespace pg_default;