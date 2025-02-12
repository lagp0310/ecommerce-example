-- Return parsed options for customer address selector.
CREATE
OR REPLACE FUNCTION get_parsed_customer_addresses_options(IN customer_id UUID, key_name_prefix TEXT) RETURNS TABLE(id UUID, name TEXT, value UUID, additional_search_params JSONB) AS $get_parsed_customer_addresses_options$
  BEGIN
RETURN QUERY SELECT
  customer_addresses.id,
  CONCAT(
    customer_addresses.street_address,
    ' (',
    customer_addresses.first_name,
    ' ',
    customer_addresses.last_name,
    ')'
  ) AS name,
  customer_addresses.id AS value,
  JSONB_OBJECT(ARRAY[CONCAT(key_name_prefix, 'AddressId'), CONCAT(key_name_prefix, 'CountryId'), CONCAT(key_name_prefix, 'CountryStateId')], ARRAY[customer_addresses.id, customer_addresses.country, customer_addresses.country_state]::TEXT[]) AS additional_search_params
FROM
  customer_addresses
WHERE
  customer_addresses.customer = customer_id
ORDER BY
  customer_addresses.street_address,
  customer_addresses.first_name,
  customer_addresses.last_name;
  END;
$get_parsed_customer_addresses_options$ language plpgsql;