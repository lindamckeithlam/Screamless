class Restaurant < ApplicationRecord
  validates :name, :address, :phone, presence: true
  validates :phone, uniqueness: true

  has_many :reviews,
    class_name: "Review",
    foreign_key: :restaurant_id
end
