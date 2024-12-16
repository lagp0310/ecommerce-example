-- Get Maximum Price for Store Products.
CREATE
OR REPLACE FUNCTION get_products_max_price (
  IN store_id UUID,
  OUT result_max_price DOUBLE PRECISION
) AS $get_products_max_price$
    BEGIN
      SELECT
        MAX(price)
      INTO
        result_max_price
      FROM
        products
      WHERE
        store = store_id;
    END;
    $get_products_max_price$ language plpgsql;
