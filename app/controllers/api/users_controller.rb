class Api::UsersController < ApplicationController
  def create
    @user = User.new(uparams)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :show
  end

  def update
    @user = User.find_by(id: params[:id])

    if params[:address]
      @user.address = params[:address]
      @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def uparams
    params.require(:user).permit(:email, :last_name, :first_name, :password, :address)
  end
end
