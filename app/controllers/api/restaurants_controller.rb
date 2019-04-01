class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])
    render json: @restaurant
  end

  def rparams
    params.permit(:restaurant).require(:name, :address, :phone)
  end
end
