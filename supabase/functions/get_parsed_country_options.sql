-- Return parsed options for countries' selector.
CREATE
OR REPLACE FUNCTION get_parsed_country_options() RETURNS TABLE(id UUID, name TEXT, value TEXT) AS $get_parsed_country_options$
  BEGIN
RETURN QUERY SELECT
  countries.id,
  countries.name,
  countries.alpha_2 AS value
FROM
  countries
ORDER BY
  countries.name;
  END;
$get_parsed_country_options$ language plpgsql;
