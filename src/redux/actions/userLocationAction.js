export const FETCH_USERLOCATION_BEGIN = 'FETCH_USERLOCATION_BEGIN';
export const FETCH_USERLOCATION_SUCCESSS = 'FETCH_USERLOCATION_SUCCESSS';
export const FETCH_USERLOCATION_FAILUIRE = 'FETCH_USERLOCATION_FAILUIRE';

export const fetchUserLocationBegin = () => ({
  type: FETCH_USERLOCATION_BEGIN
});

export const fetchUserLocationSuccess = location => ({
  type: FETCH_USERLOCATION_SUCCESSS,
  payload: { location }
});

export const fetchUserLocationFailure = error => ({
  type: FETCH_USERLOCATION_FAILUIRE,
  payload: { error }
});
