import { data } from "../app-data";

const jobReducer = (state = data.jobs, action) => {
    switch (action.type) {
        case "ADD_JOB_SUCCESS":
            return{
                ...state,
                formData:{...action.payload},
                loading:false
            }
            break;
        case "ADD_JOB_START":
            return{
                ...state,
                loading:action.payload
            }
            break;
            case "ADD_JOB_ERROR":
                return{
                    ...state,
                    loading:false,
                    ["error"]: action.payload
                }
                break;
        default:
            return { ...state }
    }
}

export default jobReducer;