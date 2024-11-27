-- Dashboard data.
CREATE
OR REPLACE FUNCTION get_dashboard_data (
  OUT result_orders_total DOUBLE PRECISION,
  OUT result_total_orders INTEGER,
  OUT lm_orders_total DOUBLE PRECISION,
  OUT lm_total_orders INTEGER,
  OUT result_customers_count INTEGER,
  OUT lm_customers_count INTEGER,
  OUT orders_amount_difference_percentage DOUBLE PRECISION,
  OUT is_orders_amount_percentage_positive BOOL,
  OUT orders_difference_percentage DOUBLE PRECISION,
  OUT is_orders_percentage_positive BOOL,
  OUT customers_difference_percentage DOUBLE PRECISION,
  OUT is_customers_difference_percentage_positive BOOL
) AS $get_dashboard_data$
    DECLARE
      var_orders_total DOUBLE PRECISION;
      var_total_orders INTEGER;
      var_lm_orders_total DOUBLE PRECISION;
      var_lm_total_orders INTEGER;
      var_customers_count INTEGER;
      var_lm_customers_count INTEGER;
    BEGIN
      SELECT 
        orders_total, 
        total_orders
      INTO 
        var_orders_total, 
        var_total_orders 
      FROM 
        get_monthly_orders_info();

      SELECT 
        COALESCE(orders_total, 0), 
        COALESCE(total_orders, 0)
      INTO 
        var_lm_orders_total, 
        var_lm_total_orders 
      FROM 
        get_monthly_orders_info(CURRENT_DATE - '1 MONTH'::INTERVAL);

      SELECT 
        customers_count 
      INTO 
        var_customers_count 
      FROM 
        get_monthly_users_info();

      SELECT 
        customers_count
      INTO 
        var_lm_customers_count
      FROM 
        get_monthly_users_info(CURRENT_DATE - '1 MONTH'::INTERVAL);

      WITH percentages AS (
        SELECT
          ROUND (((var_orders_total - var_lm_orders_total) / COALESCE(NULLIF(var_lm_orders_total, 0), var_orders_total)) * 100) AS orders_amount_percentage,
          ROUND (((var_total_orders - var_lm_total_orders) / COALESCE(NULLIF(var_lm_total_orders, 0), var_total_orders)) * 100) AS orders_percentage,
          ROUND (((var_customers_count - var_lm_customers_count) / COALESCE(NULLIF(var_lm_customers_count, 0), var_customers_count)) * 100) AS customers_percentage
      )
      SELECT
        percentages.orders_amount_percentage,
        percentages.orders_amount_percentage >= 0,
        percentages.orders_percentage,
        percentages.orders_percentage >= 0,
        percentages.customers_percentage,
        percentages.customers_percentage >= 0
      INTO
        orders_amount_difference_percentage,
        is_orders_amount_percentage_positive,
        orders_difference_percentage,
        is_orders_percentage_positive,
        customers_difference_percentage,
        is_customers_difference_percentage_positive
      FROM
        percentages;

      result_orders_total = var_orders_total;
      result_total_orders = var_total_orders;
      lm_orders_total = var_lm_orders_total;
      lm_total_orders = var_lm_total_orders;
      result_customers_count = var_customers_count;
      lm_customers_count = var_lm_customers_count;
      result_customers_count = var_customers_count;
    END;
    $get_dashboard_data$ language plpgsql;
