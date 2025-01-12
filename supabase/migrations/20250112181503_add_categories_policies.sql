create policy "Read Access"
on public.categories
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.categories
as PERMISSIVE
for INSERT
to authenticated
with check (
  true
);
create policy "Update Access"
on public.categories
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.categories
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);