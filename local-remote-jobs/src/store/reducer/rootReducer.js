import { combineReducers } from 'redux';
import dashboardReducer  from './dashboardReducer'
import jobReducer  from './jobsReducer'
import landingReducer from './landingReducer';

const rootReducer  = combineReducers({
    landing: landingReducer,
    dashboard: dashboardReducer,
    job: jobReducer
})

export default rootReducer;