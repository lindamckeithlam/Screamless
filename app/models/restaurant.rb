# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  address      :string           not null
#  phone        :string           not null
#  cuisine_name :string
#  rating       :float
#  price        :float
#  open_time    :integer
#  close_time   :integer
#  type         :string
#  lat          :float
#  lng          :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :phone, presence: true
  validates :phone, uniqueness: true

  has_many :reviews,
    class_name: "Review",
    foreign_key: :restaurant_id

  has_many :menu_items,
           class_name: "MenuItem",
           foreign_key: :restaurant_id
end
