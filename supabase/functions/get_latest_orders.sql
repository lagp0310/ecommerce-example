-- Latest Orders.
CREATE
OR REPLACE FUNCTION get_latest_orders (IN rows_limit INTEGER DEFAULT 5) RETURNS TABLE (
  first_name CHARACTER VARYING,
  last_name CHARACTER VARYING,
  email CHARACTER VARYING,
  result_orders_total NUMERIC
) AS $get_latest_orders$
  BEGIN
    RETURN QUERY SELECT
  *
  FROM
  (
    SELECT 
      customers.first_name,
      customers.last_name,
      emails.email,
      ROUND((line_items.price * line_items.quantity)::NUMERIC, 2) AS result_orders_total
    FROM
      carts,
      customers,
      emails,
      line_items,
      orders
    WHERE
      orders.cart = carts.id
      AND line_items.cart = carts.id
      AND carts.customer = customers.id
      AND customers.id = emails.customer
    GROUP BY
      customers.first_name, customers.last_name, emails.email, orders.id, line_items.price, line_items.quantity
    LIMIT rows_limit
  ) AS latest_orders;
  END;
$get_latest_orders$ language plpgsql;
