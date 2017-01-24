Rails.application.routes.draw do
  root :to => "hello_world#index"
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout
end
