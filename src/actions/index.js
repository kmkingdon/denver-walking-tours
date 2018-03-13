export const getLocation = () => {

  return async (dispatch) => {
      let currentLocation= {};
      navigator.geolocation.getCurrentPosition(function(location) {
        currentLocation.latitude = location.coords.latitude;
        currentLocation.longitude = location.coords.longitude;
        dispatch(saveLocation(currentLocation))
      })
    }
}

export const saveLocation = (location) => {
  return {
      type: 'SAVE_LOCATION',
      location
    }
}


export const getTours = () => {
    return async (dispatch) => {
        const response = await fetch('https://walkingdb.herokuapp.com/tours');
        const tours = await response.json();
        dispatch(()=> dispatch(gotTours(tours)));
    }
}

export const gotTours = (tours) => {
  return {
      type: 'GOT_TOURS',
      tours
    }
}

export const selectTour = (id) => {
  return {
      type: 'SELECT_TOUR',
      id
    }
}
