class MenuItem < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :restaurant,
             class_name: "Restaurant",
             foreign_key: :restaurant_id
end
