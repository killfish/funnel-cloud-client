import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { codes } from './downtimeCodes';
import { modals } from './modals';

const codeReducer = combineReducers({
  codes,
  form: reduxFormReducer,
  modals
});

export default codeReducer;