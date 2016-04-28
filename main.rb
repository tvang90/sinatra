require "sinatra"

get "/" do
  erb :index
end

get "/new-games" do
  erb :images
end

get "/in_now" do # dashes for url
  erb :innow     # underscore for file names
end

get "/coming_soon" do
  erb :comingsoon
end

get "/contact" do
  erb :contact
end

post "/form-submit" do
  erb :form_submit
end