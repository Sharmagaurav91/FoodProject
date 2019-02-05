const initialState = {
    currentView: "searchPage",
    location: "Dallas",
    selectedRestaurant: {}
};

const reducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
            case 'HANDLE_RESTAURANT_CLICK': return handleRestaurantClick(state, action);
        default:
            return state;
    }
}

const handleRestaurantClick = (state, action) => {
    const newState =  {...state};
    newState.selectedRestaurant = action.restaurant;
    newState.currentView = "restaurantPage"
    return newState;
}

// const handlePersonClick = (state, action) => {
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.currentView = "PersonEdit";
//     newState.selectedPerson = state.people.reduce((acc, p) => (p.id === action.personId) ? p : acc);
//     return newState;
// }

export default reducer;