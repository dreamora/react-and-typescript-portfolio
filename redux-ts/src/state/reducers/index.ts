import {combineReducers} from "redux";
import npmpackagesReducer from "./npmpackagesReducer";

const reducers = combineReducers({
                                   packages: npmpackagesReducer
                                 });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
