Rails.application.routes.draw do
  resources :manage_group, only: [:index, :new]
  resources :session, only: [:new, :destroy]

  get 'callback', to: :callback, controller: 'session'

  root "session#new"
end
