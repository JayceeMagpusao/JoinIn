class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      # render "api/posts/show"
      render "api/likes/show"
      # render json: {like: @like}
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    # likeId = Like.where(like_params).id
    # @like = Like.where(like_params)
    @like = Like.find(params[:id])
    # puts @like

    if @like.destroy
      render "api/likes/show"
    else
      render ['Like could not be found']
    end
  end

  def index
    @likes = Like.all

    # render json: {likes: @likes}
    render "api/likes/index"
  end

  private
  # def selected_post
  #   Post.find_by(params[:id])
  # end

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
