class Api::BookingsController < ApplicationController
    
    def show
        @booking = Booking.find(params[:id])
        render :show
    end 

    def create
        @booking = Booking.new(booking_params)

        if @booking.save 
            @user = User.find(@booking.booker_id)
            render "api/users/show"
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end 

    def update
        @booking = Booking.find(params[:id])
        if @booking.update_attributes(booking_params)
            @user = User.find(@booking.booker_id)
            render "api/users/show"
        else 
            render json: @booking.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        @user = User.find(@booking.booker_id)
        render "api/users/show"
    end

    private 

    def booking_params
        params.require(:booking).permit(:spot_id, :booker_id, :total_nights, :total_price, :guests, :check_in_date, :check_out_date)
    end 
end
