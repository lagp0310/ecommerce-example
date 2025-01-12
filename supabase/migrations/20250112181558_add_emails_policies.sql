create policy "Read Access"
on public.emails
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);
create policy "Insert Access"
on public.emails
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.emails
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.emails
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);