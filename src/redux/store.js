import { legacy_createStore, applyMiddleware, combineReducers, } from 'redux'
import createSagaMiddleware from 'redux-saga'
import servicesReducer from './reducers/services';
import saga from './saga';
const reducer = combineReducers({
  services:servicesReducer, 
});
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware)
const store = legacy_createStore (reducer,middlewareEnhancer);
sagaMiddleware.run(saga);
export default store;