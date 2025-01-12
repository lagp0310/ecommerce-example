create policy "Read Access"
on public.store_features
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.store_features
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.store_features
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.store_features
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);