-- Return cart's summary data.
CREATE
OR REPLACE FUNCTION get_cart_summary_data (
  IN cart_id UUID,
  OUT subtotal_result DOUBLE PRECISION,
  OUT shipping_result DOUBLE PRECISION,
  OUT taxes_result DOUBLE PRECISION,
  OUT total_result DOUBLE PRECISION
) AS $get_cart_summary_data$
  BEGIN
    SELECT
  SUM(cart_summary.cart_subtotal) AS cart_subtotal,
  SUM(cart_summary.shipping_total) AS shipping_total,
  SUM(cart_summary.taxes_total) AS taxes_total,
  SUM(cart_summary.cart_subtotal + cart_summary.shipping_total + cart_summary.taxes_total) AS cart_total
  INTO
    subtotal_result,
    shipping_result,
    taxes_result,
    total_result
FROM
  (
    SELECT
      line_items.price * COALESCE(line_items.weight, line_items.quantity) AS cart_subtotal,
      -- TODO: Shipping is not developed yet. Temporal value.
      0 AS shipping_total,
      -- TODO: Taxes not developed yet, but we apply a 6% as a fixed amount.
      (line_items.price * COALESCE(line_items.weight, line_items.quantity)) * 0.06 AS taxes_total
    FROM
      carts,
      line_items
    WHERE
      carts.id = cart_id
      AND line_items.cart = carts.id
  ) AS cart_summary;
  END;
$get_cart_summary_data$ language plpgsql;
