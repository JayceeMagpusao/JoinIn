class API::PostsController < ApplicationController
  def index
    posts = Post.all

    render :index
  end

  def show
    @posts = Post.find(params[:id])
  end

  private
  def post_params
    params.require(:post).permit(:body)
  end
end
