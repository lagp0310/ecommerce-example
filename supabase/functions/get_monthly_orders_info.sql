-- Month Orders Summary.
CREATE
OR REPLACE FUNCTION get_monthly_orders_info (IN current_date_arg timestamp DEFAULT CURRENT_DATE, OUT orders_total DOUBLE PRECISION, OUT total_orders INTEGER) AS $get_monthly_orders_info$
    BEGIN
      SELECT
        SUM(orders_summary.orders_total),
        COUNT(orders_summary.order_id)
      INTO
        orders_total,
        total_orders
      FROM
        (SELECT
            line_items.price * line_items.quantity AS orders_total,
            orders.id AS order_id
          FROM
            carts,
            line_items,
            orders
          WHERE
            EXTRACT(
              'MONTH'
              FROM
                orders.created_at
            ) = EXTRACT(
              'MONTH'
              FROM
                current_date_arg
            )
            AND orders.cart = carts.id
            AND line_items.cart = orders.cart) AS orders_summary;
    END;
    $get_monthly_orders_info$ language plpgsql;
