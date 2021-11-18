class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    @likeCounter = Like.likeCounter
    @commentCounter = Comment.commentCounter

    render json: { posts: @posts, likeCounter: @likeCounter, commentCounter: @commentCounter }
    # render "api/posts/index"
  end

  def show
    @post = Post.find(params[:id])
    @likes = @post.likes
    @comments = @post.comments
    
    if @post
      render json: { post: @post, likes: @likes, comments: @comments }
    else
      render json: ['Could not locate post'], status: 400
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      # render "api/posts/index"
      puts "i am in the created!!!!!"
      render :show
      # render json: ["hello"]
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.author_id == current_user.id && @post.update(post_params)
      render "api/posts/show"
    elsif !@post
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
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render ['Post could not be found']
    end
  end

  private
  # def selected_post
  #   Post.find_by(params[:id])
  # end

  def post_params
    params.require(:post).permit(:body, :author_id)
  end
end
