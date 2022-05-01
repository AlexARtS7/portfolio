const initialState ={
    activeRoute: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVEROUTE': return { ...state, activeRoute: action.index }
    default: return state
    }
}

export default reducer;