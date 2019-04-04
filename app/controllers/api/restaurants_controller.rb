class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all

    render :index
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])
    render :show
  end

  def rparams
    params.permit(:restaurant).require(:name, :address, :phone)
  end
end
