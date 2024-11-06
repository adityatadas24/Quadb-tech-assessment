import { applyMiddleware, createStore, combineReducers } from "redux";
import TaskReducer from "./Reducers/TaskReducer";
import WeatherReducer from "./Reducers/WeatherReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  tasks: TaskReducer,
  weather: WeatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 