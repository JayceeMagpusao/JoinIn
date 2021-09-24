class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  # belongs_to :user

  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

end
