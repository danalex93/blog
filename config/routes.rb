Blog::Application.routes.draw do
  get "works/index"
  get 'admin', to: 'admin#index'
  get 'about', to: 'about#index'
  get 'works', to: 'works#index'
  resources :posts

  resources :posts do
    resources :comments
  end

  get "welcome/index"
  root 'welcome#index'

end
