-- Orders Summary per Month.
CREATE
OR REPLACE FUNCTION get_orders_summary_per_month () RETURNS TABLE (result_month_number NUMERIC, result_month_name TEXT, total_orders BIGINT, orders_total DOUBLE PRECISION) AS $get_orders_summary_per_month$
  BEGIN
    RETURN QUERY SELECT
  month_number,
  month_name,
  result_total_orders,
  result_orders_total
FROM
  (
    SELECT DISTINCT
      TRIM(CONCAT(
        SUBSTRING(
          TO_CHAR(DATE_TRUNC('MONTH', orders.created_at), 'MONTH') FROM 1 FOR 1
        ), 
        LOWER(
          SUBSTRING(
            TO_CHAR(DATE_TRUNC('MONTH', orders.created_at), 'MONTH') FROM 2 FOR 2
          )
        )
      )) AS month_name,
      EXTRACT(
        'MONTH'
        FROM
          DATE_TRUNC('MONTH', orders.created_at)
      ) AS month_number,
      COUNT(orders.id) AS result_total_orders,
      SUM(line_items.price * line_items.quantity) AS result_orders_total
    FROM
      carts,
      line_items,
      orders
    WHERE
      orders.cart = carts.id
      AND line_items.cart = carts.id
    GROUP BY
      DATE_TRUNC('MONTH', orders.created_at)
  ) AS orders_summary ORDER BY month_number ASC;
  END;
$get_orders_summary_per_month$ language plpgsql;
