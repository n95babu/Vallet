class CurrenciesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @currencies = Currency.where(user_id: @user.id)
    render json: @currencies, include: :user, status: :ok
  end

  def show 
    @user = User.find(params[:user_id])
    @currency = Currency.find(params[:id])
    render json: @currency, include: :user, status: :ok
  end

  def create
    # @user = User.find(params[:user_id])
    @currency = Currency.new(currencies_params)
    if @currency.save
      render json: @currency, status: :created
    else
      render json: @currency.errors, status: :unprocessable_entity
    end
  end

  def update
    @currency = Currency.find(params[:id])
    if @currency.update(currency_params)
      render json: @currency, status: :ok
    else
      render json: { errors: @currency.errors }, status: :unprocessable_entity
    end
  end

   def destroy
    @currency = Currency.find(params[:id])
    @currency.destroy
    # come back to this
  end

   private
   
   def currency_params
    params.require(:currency).permit(:coin, :amount, :user_id)
  end 
end
