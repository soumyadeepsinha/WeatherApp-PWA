import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// visit openweather to get your api key
const API_KEY = '';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}