create policy "Read Access"
on public.customers
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);
create policy "Insert Access"
on public.customers
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.customers
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.customers
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);