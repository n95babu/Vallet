class AuthenticationController < ApplicationController
  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])
    if @user.authenticate(params[:password]) # authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(id: @user.id, email: @user.email)
      render json: { token: token , user: {id: @user.id, email: @user.email}}, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end