import axios from "axios";

export const FETCH_CITYBIKES_BEGIN = 'FETCH_CITYBIKES_BEGIN';
export const FETCH_CITYBIKES_SUCCESSS = 'FETCH_CITYBIKES_SUCCESSS';
export const FETCH_CITYBIKES_FAILUIRE = 'FETCH_CITYBIKES_FAILUIRE';

export const fetchCityBikesBegin = () => ({
  type: FETCH_CITYBIKES_BEGIN
});

export const fetchCityBikesSuccess = results => ({
  type: FETCH_CITYBIKES_SUCCESSS,
  payload: { results }
});

export const fetchCityBikesFailure = error => ({
  type: FETCH_CITYBIKES_FAILUIRE,
  payload: { error }
});

export const fetchCityBikesNetworks = () => {
  return dispatch => {
    dispatch(fetchCityBikesBegin());
    axios.get('https://api.citybik.es/v2/networks')
    .then(response => dispatch(fetchCityBikesSuccess(response.data.networks)))
    .catch(error => dispatch(fetchCityBikesFailure(error)));
  }
}
