import {
  REQUEST_DTCODES,
  RECEIVE_DTCODES,
  DELETE_DTCODE,
  SELECT_DTCODE,
  ADD_DTCODE,
  UPDATE_DTCODE
} from 'containers/DownTimeCodes/actions/downtimeCodes';

export function codes(
  state = {
    isFetching: false,
    payload: [],
    activeCode: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_DTCODES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_DTCODES:
      return Object.assign({}, state, {
        isFetching: false,
        payload: action.payload,
      });
    case DELETE_DTCODE:
      return Object.assign({}, state, {
        payload: state.payload.filter(code => parseInt(code.id, 10) !== parseInt(action.id, 10))
      });
    case SELECT_DTCODE:
      return Object.assign({}, state, {
        activeCode: Object.assign({}, state.payload.find(code => code.id === action.id))
      });
    case ADD_DTCODE:
      return Object.assign({}, state, {
        payload: state.payload.concat([action.code])
      });
    case UPDATE_DTCODE:
      const payload = [...state.payload];
      const codeIndex = payload.findIndex(code => code.id === action.code.id);
      payload[codeIndex] = action.code;
      return Object.assign({}, state, {
        payload: payload
      });
    default:
      return state
  }
}



