create policy "Read Access"
on public.cart_states
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.cart_states
as PERMISSIVE
for INSERT
to authenticated
with check (
  true
);
create policy "Update Access"
on public.cart_states
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.cart_states
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);