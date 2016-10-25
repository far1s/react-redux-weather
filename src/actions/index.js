import axios from 'axios';

const API_KEY = 'cec5e5846f488fd6a41d2dece90f8f1c';
const URL_ROOT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL_ROOT}&q=${city},de`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
