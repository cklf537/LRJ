const ADD_JOB_START = "ADD_JOB_START";
const ADD_JOB_SUCCESS = "ADD_JOB_SUCCESS";
// const ADD_JOB_FAIL = "ADD_JOB_FAIL";

const postJobStart = ()=>({
    type: ADD_JOB_START
})
const postJobSuccess = job=>({
    type: ADD_JOB_SUCCESS,
    payload: job
})
// const postJobFail = error=>({
//     type: ADD_JOB_FAIL,
//     payload:error
// })


export const postJobAction = (job)=>{
    return (dispatch, getState)=>{
        dispatch(postJobStart())
        dispatch(postJobSuccess(job))
        // dispatch(postJobSuccess(job));
    }
}

