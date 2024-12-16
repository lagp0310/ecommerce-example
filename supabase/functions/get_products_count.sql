-- Count all Store Products.
CREATE
OR REPLACE FUNCTION get_products_count (
  IN store_id TEXT,
  OUT result_products_count INTEGER
) AS $get_products_count$
    BEGIN
      SELECT 
        COUNT(id)
      INTO 
        result_products_count
      FROM 
        products
      WHERE
        products.store = store_id::UUID;
    END;
    $get_products_count$ language plpgsql;
