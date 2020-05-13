// import {  } from "react-redux";
import { data } from "../app-data";

const landingReducer = (state=data.landing, action)=>{
    return ({
        ...state
    })
}

export default landingReducer;