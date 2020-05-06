// import { data } from "../app-data";

import Jobs from "../../Components/Dashboard/jobs";
const initState = [];

const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_JOB_SUCCESS":
            initState.push(action.payload);
            return initState;
            break;
        case "ADD_JOB_START":
            let initialLoad = false
            return { ...state };
            break;
        default:
            return { ...state }
            break;
    }
}

export default jobReducer;