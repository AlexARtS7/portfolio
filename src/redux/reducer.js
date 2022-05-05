const initialState ={
    activeRoute: 0,
    workInfo: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVEROUTE': return { ...state, activeRoute: action.payload }
        case 'SET_WORKINFO': return { ...state, workInfo: action.payload }
    default: return state
    }
}

export default reducer;