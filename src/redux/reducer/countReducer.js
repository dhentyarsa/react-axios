const INITIAL_STATE = {
    count: 0
}

export const countReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'PLUS':
            return{...state,count: state.count+1}
        case 'MINUS':
            return{...state, count: state.count-1}
        case 'GANTI':
            return{...state, count: state.payload}
        default:
            return state
    }
}

export default countReducer