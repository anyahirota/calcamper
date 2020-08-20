export const fetchSpots = () => (
    $.ajax({
        method: 'GET',
        url: 'api/spots',
    })
);

export const fetchSpot = (spotId) => (
    $.ajax({
        method: 'GET',
        url: `api/spots/${spotId}`,
    })
);