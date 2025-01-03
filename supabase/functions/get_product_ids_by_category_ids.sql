-- Return products IDs that are categorized as any of the category_ids argument values.
CREATE
OR REPLACE FUNCTION get_product_ids_by_category_ids (IN store_id UUID, category_ids UUID[]) RETURNS TABLE (id UUID) AS $get_product_ids_by_category_ids$
  BEGIN
RETURN QUERY SELECT DISTINCT
  products.id
FROM
  categories,
  products,
  product_category
WHERE
  products.store = store_id
  AND product_category.category = ANY(category_ids)
  AND product_category.product = products.id
ORDER BY
    products.id;
  END;
$get_product_ids_by_category_ids$ language plpgsql;
