import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import codeReducer from 'containers/DownTimeCodes/reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    codeReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}