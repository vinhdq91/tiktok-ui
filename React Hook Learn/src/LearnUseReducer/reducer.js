import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant';

export const initState = {
    job: '',
    jobs: []
};

const reducer = (state, action) => {
    console.log("CURRENT STATE: ", state);
    console.log("action: ", action);
    let newState;
    switch(action.type){
        case SET_JOB:
            console.log("====SET JOB====");
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            console.log("====ADD JOB====");
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            console.log("====DELETE JOB====");
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action');
    }
    console.log("NEW STATE: ", newState);
    return newState;
}

export default reducer