json.partial! "api/users/user", user: @user

json.bookings do 
    @user.bookings.each do |booking|
        json.set! booking.id do 
            json.partial! "api/bookings/booking", booking: booking
        end 
    end 
end 