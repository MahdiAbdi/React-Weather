export default function(state={}, action) {
    switch (action.type) {
        case "FETCH_WEATHER":
            return {weather: action.payload.data}
        default:
            return state
    }
}