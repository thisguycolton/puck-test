Rails.application.routes.draw do
  get "test/hello"
  root "test#hello" # This is the main route
  get "/pages", to: "pages#index"
end
