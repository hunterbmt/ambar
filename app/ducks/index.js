import { reducer as router } from 'react-native-router-redux';
import {combineReducers} from 'redux';
import food from './food';
export default combineReducers({
  router,
  food
});
