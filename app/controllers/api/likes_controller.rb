class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      # render "api/posts/show"
      # render "api/posts/index"
      render json: {like: @like}
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])

    if @like.destroy
      render "api/posts/show"
    else
      render ['Like could not be found']
    end
  end

  def index
    @likes = Like.all

    render json: {likes: @likes}
    # render "api/posts/index"
  end

  private
  # def selected_post
  #   Post.find_by(params[:id])
  # end

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
