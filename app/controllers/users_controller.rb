class UsersController < ApplicationController
  # before_action :set_user, only: %i[show update destroy]
  before_action :authorize_request, only: [:verify]

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
    p @user
    if @user.update({first_name: params[:first_name], last_name: params[:last_name], phone: params[:phone]})
      render json: @user, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def verify
    @user = {
      id: @current_user [:id],
      username: @current_user[:username],
      email: @current_user[:email]
    }
    render json: @user 
  end
  
  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :phone)
  end
end
