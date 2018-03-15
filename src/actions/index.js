export const getLocation = () => {
  return function(dispatch, getState) {
    const state = getState();
    const options ={
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    if(state.main.gpsPermission) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function(location, options) {
        resolve(location.coords);
      });
    }).then(coords =>
      dispatch(saveLocation(coords.latitude, coords.longitude))
    );
  };
};
};

export const saveLocation = (latitude, longitude) => {
  return {
    type: "SAVE_LOCATION",
    latitude,
    longitude
  };
};

export const getTours = () => {
  return async dispatch => {
    const response = await fetch("https://walkingdb.herokuapp.com/tours");
    const tours = await response.json();
    dispatch(() => dispatch(gotTours(tours)));
  };
};

export const gotTours = tours => {
  return {
    type: "GOT_TOURS",
    tours
  };
};

export const selectTour = id => {
  return {
    type: "SELECT_TOUR",
    id
  };
};

export const getStops = () => {
  return async dispatch => {
    const response = await fetch("https://walkingdb.herokuapp.com/stops");
    const stops = await response.json();
    dispatch(() => dispatch(gotStops(stops)));
  };
};

export const gotStops = stops => {
  return {
    type: "GOT_STOPS",
    stops
  };
};

export const nextStop = () => {
  return {
    type: "NEXT_STOP"
  };
};

export const backStop = () => {
  return {
    type: "BACK_STOP"
  };
};

export const resetTour = () => {
  return {
    type: "RESET_TOUR"
  };
};

export const savePermission = (boolean) => {
  return {
    type: "SAVE_PERMISSION",
    boolean
  };
};
