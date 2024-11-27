-- Month Users Info.
CREATE
OR REPLACE FUNCTION get_monthly_users_info (IN current_date_arg timestamp DEFAULT CURRENT_DATE, OUT customers_count INTEGER) AS $get_monthly_users_info$
    BEGIN
      SELECT
        COUNT(customers_month_summary.id) AS total_month_customers
      INTO
        customers_count
      FROM
        (SELECT
            customers.id
          FROM
            customers
          WHERE
            EXTRACT(
              'MONTH'
              FROM
                customers.created_at
            ) = EXTRACT(
              'MONTH'
              FROM
                current_date_arg
            )
        ) AS customers_month_summary;
    END;
    $get_monthly_users_info$ language plpgsql;
