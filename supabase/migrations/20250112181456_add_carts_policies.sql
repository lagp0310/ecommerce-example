create policy "Read Access"
on public.carts
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.carts
as PERMISSIVE
for INSERT
to public
with check (
  true
);
create policy "Update Access"
on public.carts
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.carts
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);