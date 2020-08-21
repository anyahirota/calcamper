export const selectSpotHost = (state, spot) => {
    return spot ? state.entities.users[spot.host_id] : {}
} 