// import { data } from "../app-data";

const jobReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_JOB_SUCCESS":
            const job = { ...action.payload };
            return {
                ...state,
                job
            }
            break;
        case "ADD_JOB_START":
            return {...state};
            break;
        default:
            return { ...state }
            break;
    }
}

export default jobReducer;