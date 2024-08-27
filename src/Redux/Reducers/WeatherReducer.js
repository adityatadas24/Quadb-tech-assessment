const initialState = {
    loading: false,
    data: {},
    error: ''
};

const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHER_FETCH_REQUEST':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'WEATHER_FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case 'WEATHER_FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default WeatherReducer;
