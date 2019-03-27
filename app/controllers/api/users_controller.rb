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

  def uparams
    params.require(:user).permit(:email, :last_name, :first_name, :password)
  end
end
