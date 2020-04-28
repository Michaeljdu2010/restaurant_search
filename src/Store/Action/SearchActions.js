export const addCityResults = cityData => ({
  type: 'ADD_CITY_RESULTS',
  cityName: cityData.cityName,
  data: cityData.data
});