create policy "Read Access"
on public.locales
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.locales
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.locales
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.locales
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);