class Comment < ApplicationRecord
  validates :body, :user_id, :post_author_id, :post_id, presence: true
  
  belongs_to :post
  belongs_to :user

  scope :commentCounter, -> { select('post_id, count(post_id) as counter').group(:post_id) }
end
