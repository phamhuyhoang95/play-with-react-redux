
const userReducer = (state = {
    name: "hoang",
    age: 12
}, action) => {
    switch (action.type) {
        case 'SET_NAME_FULFILLED':
            state = {
                ...state,
                    name: action.payload
            }
            break;
        case 'SET_AGE':
            state = {
                ...state,
                    age: action.payload
            }
    
        default:
            break;
    }
    return state
}

export default userReducer