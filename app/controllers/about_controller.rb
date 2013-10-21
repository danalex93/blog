class AboutController < ApplicationController
  
  http_basic_authenticate_with name: "admin", password: "supersecretpassword"

  def index
  end
  
end
