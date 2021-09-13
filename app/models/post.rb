class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  has_many :likes
  has_many :comments
end
