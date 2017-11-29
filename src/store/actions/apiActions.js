export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAILURE: 'LOAD_FAILURE',
}

const loadSuccess = (id, payload, meta = {}) => ({
  type: types.LOAD_SUCCESS,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const loadFailure = (id, payload, meta = {}) => ({
  type: types.LOAD_FAILURE,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const loadRequest = (id, payload, meta = {}) => ({
  type: types.LOAD_REQUEST,
  id,
  payload,
  meta: { ...meta, timestamp: window.performance.now() },
})

const getWhat = () => (dispatch) => {
  dispatch(loadRequest('')) /* what */
  return fetch('') /* url */
    .then((res) => res.json())
    .then((records) => dispatch(loadSuccess('', records))) /* what */
    .catch((err) => dispatch(loadFailure('', err.message))) /* what */
}


export default {
  getWhat,
}
