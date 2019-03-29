class Review < ApplicationRecord
  validates :rating, presence: true
  belongs_to :restaurant,
             class_name: "Restaurant",
             foreign_key: :restaurant_id

  belongs_to :user,
             class_name: "User",
             foreign_key: :reviewer_id
end
