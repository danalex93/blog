Blog::Application.routes.draw do
  get "welcome/index"
  root 'application#index'
end
