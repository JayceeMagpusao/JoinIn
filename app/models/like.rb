class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true

  belongs_to :post
  belongs_to :user

  scope :likeCounter, -> { select('post_id, count(post_id) as counter').group(:post_id) }
end
