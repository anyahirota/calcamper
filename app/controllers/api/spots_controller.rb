class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.with_attached_spot_photos.all 
        render :index
    end 

    def show
        @spot = Spot.with_attached_vibe_photos.find(params[:id])
        render :show
    end 

end
