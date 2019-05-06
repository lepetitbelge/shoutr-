require "sinatra"
require "sinatra/reloader" if development?
require "pry-byebug"
require "better_errors"

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

get '/' do
  @posts = DB
  @comments = COMMENTS
  @posts_with_comments = combine_posts_and_comments
  erb :index
end

private

def combine_posts_and_comments
  @posts.each_with_index do |post, index|
    post[:comments] = @comments[index]
  end
end
