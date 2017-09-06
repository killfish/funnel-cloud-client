import timeout from "util/timeout";

/**
 * @param dispatch
 * @param callback
 * @param url
 * @param reqOptions
 * @returns {*}
 */
const request = async(dispatch, callback, url, reqOptions) => {
  const { wait = 0 } = reqOptions;
  let response = await fetch(url, reqOptions);
  let data = await response.json();
  await timeout(wait);
  return dispatch(callback(data));
};

/*----------- Fetch DT codes -----------*/

export const REQUEST_DTCODES = 'REQUEST_DTCODES';
export const RECEIVE_DTCODES = 'RECEIVE_DTCODES';
/**
 * TODO: Add error handling
 * TODO: Add optimistic updating
 * **/

/**
 * @returns {{type: string}}
 */
function requestDTCodes() {
  return {
    type: REQUEST_DTCODES,
  }
}

/**
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function receiveDTCodes(payload) {
  return {
    type: RECEIVE_DTCODES,
    payload: payload,
  }
}

/**
 * @returns {function()}
 */
export function fetchCodes() {
  return dispatch => {
    dispatch(requestDTCodes());
    request(dispatch, receiveDTCodes, 'https://floating-shelf-94243.herokuapp.com/dt-codes', { wait: 1000 });
  }
}

/*----------- Delete DT codes -----------*/

export const DELETE_REQUEST_DTCODE = 'DELETE_REQUEST_DTCODE';
export const DELETE_RECEIVE_DTCODE = 'DELETE_RECEIVE_DTCODE';
/**
 * TODO: Add error handling
 * TODO: Add optimistic updating
 * **/

/**
 * @returns {{type: string}}
 */
function requestDeleteDTCode() {
  return {
    type: DELETE_REQUEST_DTCODE,
  }
}

/**
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function receiveDeleteDTCode(payload) {
  return {
    type: DELETE_RECEIVE_DTCODE,
    id: payload.id,
  }
}

export function deleteDTCode(id) {
  return dispatch => {
    dispatch(requestDeleteDTCode());
    request(dispatch, receiveDeleteDTCode, 'https://floating-shelf-94243.herokuapp.com/dt-codes', {
      method: "DELETE", headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ id: id })
    });
  }
}

/*----------- Add DT codes -----------*/

export const ADD_REQUEST_DTCODE = 'ADD_REQUEST_DTCODE';
export const ADD_RECEIVE_DTCODE = 'ADD_RECEIVE_DTCODE';
/**
 * TODO: Add error handling
 * TODO: Add optimistic updating
 * **/

/**
 * @returns {{type: string}}
 */
function requestAddDTCode() {
  return {
    type: ADD_REQUEST_DTCODE,
  }
}

/**
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function receiveAddDTCode(payload) {
  return {
    type: ADD_RECEIVE_DTCODE,
    code: payload,
  }
}

/**
 * @param code
 * @returns {{type: string, code: {}}}
 */
export function addDTCode(code = {}) {
  return dispatch => {
    dispatch(requestAddDTCode());
    request(dispatch, receiveAddDTCode, 'https://floating-shelf-94243.herokuapp.com/dt-codes', {
      method: "POST", headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(code)
    });
  }
}

/*----------- Update DT codes -----------*/

export const UPDATE_REQUEST_DTCODE = 'UPDATE_REQUEST_DTCODE';
export const UPDATE_RECEIVE_DTCODE = 'UPDATE_RECEIVE_DTCODE';
/**
 * TODO: Add error handling
 * TODO: Add optimistic updating
 * **/

/**
 * @returns {{type: string}}
 */
function requestUpdateDTCode() {
  return {
    type: UPDATE_REQUEST_DTCODE,
  }
}

/**
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function receiveUpdateDTCode(payload) {
  return {
    type: UPDATE_RECEIVE_DTCODE,
    code: payload,
  }
}

/**
 * @param code
 * @returns {{type: string, code: {}}}
 */
export function updateDTCode(code = {}) {
  return dispatch => {
    dispatch(requestUpdateDTCode());
    request(dispatch, receiveUpdateDTCode, `https://floating-shelf-94243.herokuapp.com/dt-codes/${code.id}`, {
      method: "PUT", headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(code)
    });
  }
}