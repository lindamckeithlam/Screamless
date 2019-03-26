class Api::UsersController < ApplicationController
  def create
    @user = User.new(uparams)
    if @user.save
        login(@user)
      render 'api/users/show'
    else
      flash[:errors] = @user.errors.full_messages, status: 422
    end
  end

  def uparams
    params.require(:user).permit(:username, :last_name, :first_name, :password)
  end
end
