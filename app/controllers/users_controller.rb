class UsersController < ApplicationController

  def index 
    @users = User.all
    render json: @users, include: :currencies, status: :ok
  end 

  def show
    @user = User.find(params[:id])
    render json: @user, include: :currencies, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :phone)
  end
end
