class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all 
        render :index
    end 

    def show
        @spot = Spot.find(params[:id])
        render :show
    end 


    # private

    # def spots_params
    #     params.require(:bench).permit(:description, :lat, :lng)
    # end 
end
