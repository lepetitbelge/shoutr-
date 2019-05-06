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
  @posts = combine_posts_and_comments(posts, comments)
  erb :index
end

post '/post_new' do
  result = check_params(params)
  DB << result && COMMENTS << [] unless result.nil?
  puts "weet even niet hoe ik verder moet"
end

private

def combine_posts_and_comments(posts, comments)
  posts.each_with_index.map do |post, index|
    post.merge comments: comments[index]
  end
end

def check_params(params)
  unless params[:title].nil? || params[:content].nil?
    date = Time.now.strftime('%b%e')
    new_post = {
      title: params[:title],
      content: params[:content],
      photo: '/favicon.jpg',
      rating: '',
      writer: 'Anonymous',
      date: date
    }
  end
  new_post
end
