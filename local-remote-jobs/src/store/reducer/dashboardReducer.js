import { data } from "../app-data";

const dashbordReducer = (state = data.dashboard, action)=>{
    return {...state};
}

export default dashbordReducer;