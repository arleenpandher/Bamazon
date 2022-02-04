Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create] do 
      resources :carts, only: [:index]
    end
    resources :users, only:[:show]
    resources :carts, only: [:create, :destroy, :update]
    resource :session, only:[:create, :destroy]
    resources :services, only:[:index] do 
      resources :products, only:[:index]
    end
    resources :products, only:[:show, :update] do 
      resources :reviews, only: [:create, :index]
    end
    resources :reviews, only: [:destroy]
    resources :transactions, only:[:create, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
