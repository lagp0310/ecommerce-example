create policy "Read Access"
on public.phone_numbers
as PERMISSIVE
for SELECT
to authenticated
using (
  true
);
create policy "Insert Access"
on public.phone_numbers
as PERMISSIVE
for INSERT
to authenticated
with check (
  true
);
create policy "Update Access"
on public.phone_numbers
as PERMISSIVE
for UPDATE
to authenticated
with check (
  true
);
create policy "Delete Access"
on public.phone_numbers
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);