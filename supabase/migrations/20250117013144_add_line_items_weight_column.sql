alter table public.line_items add column weight null double precision;
alter table public.line_items add constraint positive_weight_check check (weight > 0);