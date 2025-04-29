Rails.application.routes.draw do
  get 'fallback/index'

  namespace :api do
  #   resources :conversations, only: [:index, :create] do
  #     resources :messages, only: [:index, :create]
  #   end
    
  #   get 'messages/create'
  #   get 'messages/index'
  #   get 'conversations/index'
  #   get 'conversations/create'
  # end
  resources :users
  resources :carts
  resources :designer_profiles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  get "/csrf_token", to: "sessions#csrf_token"

  get '/auth/google_oauth2/callback', to: 'sessions#create'
  get '/auth/failure', to: 'sessions#failure'
  delete "/api/logout", to: "sessions#destroy"
  # get '/'

  # Defines the root path route ("/")
  # root "posts#index"
  end
  mount Rails.application.routes => "/rails/active_storage"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
