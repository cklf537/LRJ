import { createStore } from "redux";
import reducer  from "./reducer/lrjReducer";

const LrjStore = createStore(reducer);

export default LrjStore;