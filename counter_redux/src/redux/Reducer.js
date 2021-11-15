    // Default it takes initial state is 0
const initialState = {
    count : 0
}
    
    // Reducer have two arguments one is for state and another is action
const Reducer = (state = initialState, action) =>{
    switch(action.type){ 
        case "INCREMENT":
            return {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1}; 
        // case "incrementByAmount":
        //     return {count:state.count += action.payload}    
        default:
            return state;   
    }
}

export default Reducer;