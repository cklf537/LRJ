// import {  } from "react-redux";
import { data } from "../app-data";

const reducer = (state=data, action)=>{
    return ({
        ...state
    })
}

export default reducer;