create policy "Read Access"
on public.tag_types
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.tag_types
as PERMISSIVE
for INSERT
to authenticated
using (
  true
);
create policy "Update Access"
on public.tag_types
as PERMISSIVE
for UPDATE
to authenticated
using (
  true
);
create policy "Delete Access"
on public.tag_types
as PERMISSIVE
for DELETE
to authenticated
using (
  true
);