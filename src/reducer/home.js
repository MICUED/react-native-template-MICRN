const initialState = { 
    status: "hide"
}

export default (state = initialState, action) => {
    switch(action.type) {
    case "SHOW": {
        return {...state, status: "show"}
    }
    case "HIDE": {
        return {...state, status: "hide"}
    }
    default: {
        return state
    }
    }
}
