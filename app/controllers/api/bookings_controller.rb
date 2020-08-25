class Api::BookingsController < ApplicationController
    
    def index 
        if logged_in?
            @user = current_user
            render :index
        else
            render json: ['Must be signed in to view bookings'], status: 404
        end
    end 

    def show
        @booking = Booking.find(params[:id])
        render :show
    end 

    def create
        @booking = Booking.new(booking_params)

        if @booking.save 
            @user = User.find(@booking.booker_id)
            render :index
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end 

    def update
        @booking = Booking.find(params[:id])
        if @booking.update_attributes(booking_params)
            @user = User.find(@booking.booker_id)
            render :index
        else 
            render json: @booking.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        @user = User.find(@booking.booker_id)
        render :index
    end

    private 

    def booking_params
        params.require(:booking).permit(:spot_id, :booker_id, :total_nights, :total_price, :guests, :check_in_date, :check_out_date)
    end 
end
