-- Return parsed options for country states' selector.
CREATE
OR REPLACE FUNCTION get_parsed_country_state_options(IN country_id UUID) RETURNS TABLE(id UUID, name TEXT, value TEXT) AS $get_parsed_country_state_options$
  BEGIN
RETURN QUERY SELECT
  country_states.id,
  country_states.name,
  country_states.short_name AS value
FROM
  country_states
WHERE 
  country_states.country = country_id
ORDER BY
  country_states.name;
  END;
$get_parsed_country_state_options$ language plpgsql;