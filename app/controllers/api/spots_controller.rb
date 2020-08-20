class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all 
        render :index
    end 

    def show
        @spot = Spot.find(params[:id])
        render :show
    end 

end
