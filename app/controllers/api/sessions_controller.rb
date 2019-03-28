class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Hey Stranger! We don't recognize that login. 
      Spell check your info and try again!"], status: 401
    end
  end

  def destroy
    if !current_user
      render json: ["404"]
    else
      olduser = current_user
      logout
      render json: olduser.id
    end
  end
end
