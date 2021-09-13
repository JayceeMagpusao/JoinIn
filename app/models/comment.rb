class Comment < ApplicationRecord
  validates :body, :user_id, :post_author_id, :post_id, presence: true
  
  belongs_to :post
end
