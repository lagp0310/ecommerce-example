create policy "Read Access"
on public.line_items
as PERMISSIVE
for SELECT
to public
using (
  true
);
create policy "Insert Access"
on public.line_items
as PERMISSIVE
for INSERT
to public
using (
  true
);
create policy "Update Access"
on public.line_items
as PERMISSIVE
for UPDATE
to public
using (
  true
);
create policy "Delete Access"
on public.line_items
as PERMISSIVE
for DELETE
to public
using (
  true
);