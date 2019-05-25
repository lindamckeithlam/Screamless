Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit, :update]
    resources :restaurants, only: [:create, :show, :destroy, :index]
    resources :cuisines, only: [:show, :index]
    resources :orders, only: [:show, :index, :create, :edit, :update]
    resources :reviews, only: [:create, :show, :update, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
