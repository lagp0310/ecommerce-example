-- Get Available Tags for Products given a Store.
CREATE
OR REPLACE FUNCTION get_all_product_tags (
  IN store_id UUID
) RETURNS TABLE (
  id UUID,
  tag TEXT,
  type TEXT
) AS $get_all_product_tags$
    BEGIN
      RETURN QUERY SELECT DISTINCT
  product_tags.id,
  product_tags.tag,
  tag_types.type
FROM
  products,
  product_tags,
  tag_types
WHERE
  products.store = store_id
  AND product_tags.product = products.id
  AND product_tags.type = tag_types.id;
    END;
    $get_all_product_tags$ language plpgsql;
