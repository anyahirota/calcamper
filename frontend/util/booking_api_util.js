export const createBooking = (booking) => {
    return $.ajax({
        method: 'POST',
        url: '/api/bookings',
        data: { booking }
    });
}

export const updateBooking = (booking) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/bookings/${booking.id}`,
        data: { booking }
    });
}

export const deleteBooking = (bookingId) => (
    $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: 'DELETE',
        data: { bookingId }
    })
)

//only when signed in:

export const fetchBookings = () => (
    $.ajax({
        url: `/api/bookings`,
        method: 'GET',
    })
)

// const booking2 = {"spot_id": 3, "booker_id": 1, "total_nights": 2, "total_price": 65.00, "guests": 3, "check_in_date": "30/06/2021", "check_out_date": "2/07/2021"}
// need booking id for update and delete 