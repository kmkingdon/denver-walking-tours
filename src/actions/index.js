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
