class Api::CommentsController < ApplicationController
  # before_action :require_logged_in

  def index
    @comments = Comment.all

    render "api/comments/index"
    # render json: {comments: @comments}
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render "api/comments/show"
    else
      render ['Comment could not be found']
    end
  end

  def edit
    @comment = Comment.find(params[:id])
    render :edit
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.user_id == current_user.id && @comment.update(comment_params)
      render "api/comments/show"
    elsif !@comment
      render json: ['Could not locate comment'], status: 400
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :post_author_id)
  end
end
