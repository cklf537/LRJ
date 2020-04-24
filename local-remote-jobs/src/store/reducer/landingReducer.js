// import {  } from "react-redux";
import { data } from "../app-data";

const landingReducer = (state=data, action)=>{
    return ({
        ...state
    })
}

export default landingReducer;