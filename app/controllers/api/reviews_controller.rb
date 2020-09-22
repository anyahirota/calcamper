class Api::ReviewsController < ApplicationController
  def index
    if logged_in?
        @user = current_user
        render :index
    else
        render json: ['Must be signed in to view your reviews'], status: 404
    end
  end 

  def show
    @review = Review.find(params[:id])
    render :show
  end 

  def create
    @review = Review.new(review_params)
    if @review.save
      @spot = Spot.find(@review.spot_id)
      render "api/spots/show"
    else
      render json: @review.errors.full_messages, status: 422
    end 
  end 

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      @user = User.find(@review.author_id)
      render :index
    else 
      render json: @review.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    @user = User.find(@review.author_id)
    render :index 
  end 

  private

  def review_params
    params.require(:review).permit(:author_id, :spot_id, :title, :body)
  end 
end
