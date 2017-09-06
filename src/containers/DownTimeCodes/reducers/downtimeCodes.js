import {
  REQUEST_DTCODES,
  RECEIVE_DTCODES,
  DELETE_RECEIVE_DTCODE,
  ADD_RECEIVE_DTCODE,
  UPDATE_RECEIVE_DTCODE
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
    case DELETE_RECEIVE_DTCODE:
      return Object.assign({}, state, {
        payload: state.payload.filter(code => parseInt(code.id, 10) !== parseInt(action.id, 10))
      });
    case ADD_RECEIVE_DTCODE:

      console.log('action.code', action.code);

      return Object.assign({}, state, {
        payload: state.payload.concat([action.code])
      });
    case UPDATE_RECEIVE_DTCODE:
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



