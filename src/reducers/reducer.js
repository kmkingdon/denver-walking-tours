import initialState from '../initialState';

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SAVE_LOCATION': return saveLocation(state, action);
      default: return state;
    }
}

const saveLocation = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentLatitude = action.location.latitude;
    newState.currentLongitude= action.location.longitude;
    return newState;
}

export default reducer;
