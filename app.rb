require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry-byebug'
require 'better_errors'
require_relative 'database'

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

get '/' do
  posts = DB
  comments = COMMENTS
  @posts = combine_posts_and_comments(posts, comments).reverse
  erb :index
end

post '/post_new' do
  result = check_params(params)
  unless result.nil?
    DB << result
    COMMENTS << []
  end
  redirect '/'
end

private

def combine_posts_and_comments(posts, comments)
  posts.each_with_index.map do |post, index|
    post.merge comments: comments[index]
  end
end

def check_params(params)
  if !empty?(params[:title]) && !empty?(params[:content])
    date = Time.now.strftime('%b%e')
    {
      title: params[:title],
      content: params[:content],
      photo: '/favicon.jpg',
      rating: '',
      writer: 'Anonymous',
      date: date
    }
  end
end

def empty?(string)
  string.nil? || string.empty?
end
