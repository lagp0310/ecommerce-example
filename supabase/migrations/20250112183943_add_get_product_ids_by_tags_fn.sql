-- Return IDs for products that are tagged with tag_ids argument.
CREATE
OR REPLACE FUNCTION get_product_ids_by_tags (IN store_id UUID, tag_ids UUID[]) RETURNS TABLE (id UUID) AS $get_product_ids_by_tags$
  BEGIN
RETURN QUERY SELECT DISTINCT
  products.id
FROM
  products,
  product_tag
WHERE
  products.store = store_id
  AND product_tag.tag = ANY(tag_ids)
  AND product_tag.product = products.id
ORDER BY
    products.id;
  END;
$get_product_ids_by_tags$ language plpgsql;
