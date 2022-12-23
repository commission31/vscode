export default function tabReducer(state={active:0},action){
    if (action.type==="SELECT"){
        return {...state, active:action.payload}
    }
    else{
        return state
    }
}