class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all 
        render :index
    end 

    def show
        @spot = Spot.with_attached_vibe_photos.find(params[:id])
        render :show
    end 

end
