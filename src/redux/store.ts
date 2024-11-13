import { combineReducers } from 'redux';
import { yourFirstReducer } from './yourFirstReducer'; // Импортируйте ваш редюсер
import { yourSecondReducer } from './yourSecondReducer'; // Импортируйте ваш второй редюсер

const rootReducer = combineReducers({
  first: yourFirstReducer,
  second: yourSecondReducer,
});

export default rootReducer;
