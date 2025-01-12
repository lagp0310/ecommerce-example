create policy "Read Access"
on public.orders
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);
create policy "Insert Access"
on public.orders
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.orders
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.orders
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);