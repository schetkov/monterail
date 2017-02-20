Rails.application.routes.draw do

  root :to => "monterail_menu#index"
  get "/auth/:provider/callback", to: "sessions#create"
  get "/signout", to: "sessions#destroy", :as => :signout
  post 'restaurants', to: 'restaurants#create'
  delete 'restaurants/destroy/:id', to: 'restaurants#destroy'
  put 'orders/:id', to: 'orders#update'
  post 'items', to: 'items#create'

end
