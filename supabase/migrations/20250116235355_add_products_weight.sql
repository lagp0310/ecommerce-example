create type weight_unit as enum ('KG', 'OUNCE');

create table public.weight_units (
  id uuid not null default gen_random_uuid (),
  unit weight_unit not null,
  singular_name text not null,
  plural_name text not null,
  created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
  updated_at timestamp with time zone null,
  constraint weight_units_pkey primary key (id),
  constraint weight_units_unit_key unique (unit)
);

create table public.product_weights (
  id uuid not null default gen_random_uuid (),
  product uuid not null,
  weight_unit uuid not null,
  created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
  updated_at timestamp with time zone null,
  constraint product_weights_pkey primary key (id),
  constraint product_weights_product_fkey foreign key (product) references products (id) on update cascade on delete cascade,
  constraint product_weights_weight_unit_fkey foreign key (weight_unit) references weight_units (id) on update cascade on delete cascade
);

alter table public.products add column product_weight uuid null;
alter table public.products add constraint products_product_weight_fkey foreign key (product_weight) references product_weights (id) on update cascade on delete cascade;

create policy "Read Access"
on public.weight_units
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.weight_units
as PERMISSIVE
for INSERT
to authenticated
with check (
  true
);
create policy "Update Access"
on public.weight_units
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.weight_units
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);

create policy "Read Access"
on public.product_weights
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.product_weights
as PERMISSIVE
for INSERT
to authenticated
with check (
  true
);
create policy "Update Access"
on public.product_weights
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.product_weights
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);