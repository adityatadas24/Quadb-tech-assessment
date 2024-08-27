export const fetchWeather = (city) => async (dispatch) => {
    try {
        dispatch({ type: 'WEATHER_FETCH_REQUEST' });
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00c38e0279b7bc85480c3fe775d518c`);
        const data = await response.json();

        dispatch({
            type: 'WEATHER_FETCH_SUCCESS',
            payload: data
        });
    } catch (error) {
        dispatch({
            type: 'WEATHER_FETCH_FAILURE',
            payload: error.message
        });
    }
};
