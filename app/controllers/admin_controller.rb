class AdminController < ApplicationController
  http_basic_authenticate_with name: "admin", password: "supersecretpassword"
  def index
  	@posts = Post.all
  end
end
