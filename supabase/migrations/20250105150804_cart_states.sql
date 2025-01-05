create table
  public.cart_states (
    id uuid not null default gen_random_uuid (),
    state text not null,
    state_code text not null,
    description text null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    constraint cart_states_pkey primary key (id),
    constraint cart_states_state_key unique (state),
    constraint cart_states_state_code_key unique (state_code)
  ) tablespace pg_default;