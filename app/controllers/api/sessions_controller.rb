class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      flash[:errors] = "Invalid Email/Password"
    end
  end

  def destroy
    if !current_user
      flash[:errors] = "404"
    else
      olduser = current_user
      logout
      render json: olduser.id
    end
  end
end
