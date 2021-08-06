class Api::PostsController < ApplicationController
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

  def update
    @post = selected_post

    if @post && @post.update_attributes(post_params)
      render :show
    elsif !@chirp
      render json: ['Could not locate post'], status: 400
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def destroy
    @post = selected_post

    if @post
      @post.destroy
      render :show
    else
      render ['Post could not be found']
    end
  end

  private
  def selected_post
    Post.find_by(params[:id])
  end

  def post_params
    params.require(:post).permit(:body, :author_id)
  end
end
