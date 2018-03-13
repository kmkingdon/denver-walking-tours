import initialState from '../initialState';


const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SAVE_LOCATION': return saveLocation(state, action);
      case 'GOT_TOURS': return gotTours(state, action);
      case 'SELECT_TOUR': return selectTour(state, action);
      default: return state;
    }
}

const saveLocation = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentLatitude = action.location.latitude;
    newState.currentLongitude= action.location.longitude;
    return newState;
}

const gotTours = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.tours = action.tours;
    return newState;
}

const selectTour = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.selectedTour = action.id;
    return newState;
}


export default reducer;
