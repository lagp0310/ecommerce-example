create table
  public.business_currency (
    business uuid not null,
    currency uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    id uuid not null default gen_random_uuid (),
    constraint business_currency_pkey primary key (business, currency, id),
    constraint business_currency_business_fkey foreign key (business) references businesses (id) on update cascade on delete cascade,
    constraint business_currency_currency_fkey foreign key (currency) references currencies (id) on update cascade on delete cascade
  ) tablespace pg_default;