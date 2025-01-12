create policy "Read Access"
on public.customer_addresses
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.customer_addresses
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.customer_addresses
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.customer_addresses
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);