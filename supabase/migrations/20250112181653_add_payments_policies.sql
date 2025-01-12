create policy "Read Access"
on public.payments
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);
create policy "Insert Access"
on public.payments
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.payments
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.payments
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);