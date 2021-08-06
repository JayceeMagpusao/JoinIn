class API::PostsController < ApplicationController
  def index
    posts = Post.all

    render json: posts
  end

  def show
    @posts = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      # render "api/posts/show"
      # render json: ["hello"]
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:body, :author_id)
  end
end