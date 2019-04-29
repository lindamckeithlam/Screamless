class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(rparams)
    @user = @review.user
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    @restaurant = @review.restaurant
    @user = @review.user

    if @review
      render :show
      # render json: @review, status: 200
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review.user.id === current_user.id
      @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def rparams
    params.require(:review).permit(:body, :rating, :reviewer_id, :restaurant_id)
  end
end
