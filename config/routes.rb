Rails.application.routes.draw do
  resources :users do
    resources :currencies
  end
end
