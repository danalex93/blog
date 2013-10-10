Blog::Application.routes.draw do
  get 'admin', to: 'admin#index'
  get 'about', to: 'about#index'
  resources :posts

  get "welcome/index"
  root 'welcome#index'

end
