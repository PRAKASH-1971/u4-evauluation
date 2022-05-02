// create store here

import {combineReducers} from "redux";
import getdata from "./reducer";
// export const store = {};

const reducers = combineReducers({
 getdata
})
// do not remove this code, its for testing purpose
// if (window.Cypress) {
//   window.store = store;
// }

export default reducers
