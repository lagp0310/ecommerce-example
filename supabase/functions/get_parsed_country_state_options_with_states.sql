-- Return parsed options for country states' selector.
CREATE
OR REPLACE FUNCTION get_parsed_country_state_options_with_states(
  IN country_id UUID, 
  IN state_ids UUID[] DEFAULT '{}'::UUID[]
) RETURNS TABLE(id UUID, name TEXT, value TEXT) AS $get_parsed_country_state_options_with_states$
  BEGIN
RETURN QUERY SELECT
  country_states.id,
  country_states.name,
  country_states.short_name AS value
FROM
  country_states
WHERE 
  country_states.country = country_id
  AND country_states.id = ANY(state_ids)
ORDER BY
  country_states.name;
  END;
$get_parsed_country_state_options_with_states$ language plpgsql;