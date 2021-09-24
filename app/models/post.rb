class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  # belongs_to :user

  has_many :likes
  has_many :comments

end
