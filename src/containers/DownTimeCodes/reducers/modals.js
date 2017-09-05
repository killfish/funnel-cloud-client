import {
  MODAL_OPEN,
  MODAL_CLOSE
} from 'containers/DownTimeCodes/actions/modals';

/**
 * @param state
 * @param action
 * @returns {*}
 */
export function modals(state = {}, action) {
  switch (action.type) {
    case MODAL_OPEN:
      return Object.assign({}, state, {
        [action.key]: {open: true},
      });
    case MODAL_CLOSE:
      const newState = {...state};
      delete newState[action.key];
      return newState;
    default:
      return state
  }
}



