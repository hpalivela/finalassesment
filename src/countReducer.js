
const initialState = {
    counter: 0
}
const countReducer = (state = initialState,action) => {
    switch(action.type){
        case "INCREMENT":
            return {counter: state.counter + 1};
        case "DECREMENT":
            return {counter: state.counter - 1};
        case "RESET":
            return {counter: state.counter = 0}
        default:
          return state;
    }
}

export default countReducer;
