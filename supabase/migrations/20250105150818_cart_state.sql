create table
  public.cart_state (
    id uuid not null default gen_random_uuid (),
    cart uuid not null,
    state uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint cart_state_pkey primary key (id),
    constraint cart_state_state_fkey foreign key (state) references cart_states (id) on update cascade on delete cascade
  ) tablespace pg_default;