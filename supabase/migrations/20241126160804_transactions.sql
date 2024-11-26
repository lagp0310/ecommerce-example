create table
  public.transactions (
    id uuid not null default gen_random_uuid (),
    payment_method uuid not null default gen_random_uuid (),
    amount double precision not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint transactions_pkey primary key (id),
    constraint transactions_payment_method_fkey foreign key (payment_method) references payment_methods (id) on update cascade on delete cascade
  ) tablespace pg_default;