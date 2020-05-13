
import axios from 'axios';

const ADD_JOB_START = "ADD_JOB_START";
const ADD_JOB_SUCCESS = "ADD_JOB_SUCCESS";
const ADD_JOB_ERROR = "ADD_JOB_ERROR";

const postJobStart = ()=>({
    type: ADD_JOB_START,
    payload: true
})
const postJobSuccess = job=>({
    type: ADD_JOB_SUCCESS,
    payload: job
})
const postJobFail = error=>({
    type: ADD_JOB_ERROR,
    payload:error
})


export const postJobAction = (job)=>{
    return (dispatch, getState)=>{
        dispatch(postJobStart())
        axios.post(
            'http://localhost:3001/api/postjob',
            job,
            {"headers":{"content-type":"application/json"}}
            ).then(res=>{
            // dispatch(postJobSuccess(job))
            dispatch(postJobSuccess(res.data))
        }).catch(error=>{
            dispatch(postJobFail(error))
        })
    }
}

