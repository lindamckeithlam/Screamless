class Api::CuisinesController < ApplicationController
  def show
    @cuisine = Cuisine.find_by(id: params[:cuisine][:id])
  end

  def index
    @cuisines = Cuisine.all
    render :index
  end
end
