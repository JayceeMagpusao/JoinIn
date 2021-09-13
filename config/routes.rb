Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts
    resources :likes, only: [:create, :destroy, :index]
    resources :comments, only: [:create, :destroy, :edit, :update, :index]
  end
end
