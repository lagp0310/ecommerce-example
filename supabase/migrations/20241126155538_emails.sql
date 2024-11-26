create table
  public.emails (
    id uuid not null default gen_random_uuid (),
    email character varying not null,
    customer uuid null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint emails_pkey primary key (id),
    constraint emails_email_key unique (email),
    constraint emails_customer_fkey foreign key (customer) references customers (id) on update cascade on delete cascade
  ) tablespace pg_default;