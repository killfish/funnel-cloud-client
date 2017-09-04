import timeout from "util/timeout";

export const REQUEST_DTCODES = 'REQUEST_DTCODES';
export const RECEIVE_DTCODES = 'RECEIVE_DTCODES';
export const REQUEST_DTCODES_MODAL = 'REQUEST_DTCODES_MODAL';
export const RECEIVE_DTCODES_MODAL = 'RECEIVE_DTCODES_MODAL';
export const DELETE_DTCODE = 'DELETE_DTCODE';
export const SELECT_DTCODE = 'SELECT_DTCODE';
export const ADD_DTCODE = 'ADD_DTCODE';
export const UPDATE_DTCODE = 'UPDATE_DTCODE';

/**
 * @param dispatch
 * @returns {JSON}
 */
const request = async(dispatch, callback, url) => {
  let response = await fetch(url);
  let data = await response.json();
  await timeout(1000);
  return dispatch(callback(data));
};

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
    request(dispatch, receiveDTCodes, 'https://api.myjson.com/bins/1gp4q9');
  }
}


/**
 * @returns {{type: string}}
 */
function requestDTCodesModal() {
  return {
    type: REQUEST_DTCODES_MODAL,
  }
}

/**
 * @param payload
 * @returns {{type: string, payload: *}}
 */
function receiveDTCodesModal(payload) {
  return {
    type: RECEIVE_DTCODES_MODAL,
    payload: payload,
  }
}

/**
 * @returns {function()}
 */
export function fetchCodesModal() {
  return dispatch => {
    dispatch(requestDTCodesModal());
    request(dispatch, receiveDTCodesModal, 'https://api.myjson.com/bins/1gp4q9');
  }
}


/**
 * @param id
 * @returns {{type: string, id: *}}
 */
export function deleteDTCode(id) {
  return {
    type: DELETE_DTCODE,
    id: id,
  }
}

/**
 * @param id
 * @returns {{type: string, id: *}}
 */
export function selectDTCode(id) {
  return {
    type: SELECT_DTCODE,
    id: id,
  }
}

/**
 * @param code
 * @returns {{type: string, code: {}}}
 */
export function addDTCode(code = {}) {
  return {
    type: ADD_DTCODE,
    code: code,
  }
}

/**
 * @param code
 * @returns {{type: string, code: {}}}
 */
export function updateDTCode(code = {}) {
  return {
    type: UPDATE_DTCODE,
    code: code,
  }
}