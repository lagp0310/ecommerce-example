-- Return the line item ID if it's on the specified cart. Otherwise, return NULL.
CREATE
OR REPLACE FUNCTION get_line_item_id (
  IN cart_id UUID, 
  IN product_id UUID, 
  OUT line_item_id UUID
) RETURNS UUID AS $get_line_item_id$
  BEGIN
    SELECT
      id
    INTO
      line_item_id
    FROM
      line_items
    WHERE
      line_items.cart = cart_id
      AND line_items.product = product_id
    LIMIT
      1;
  END;
$get_line_item_id$ language plpgsql;
