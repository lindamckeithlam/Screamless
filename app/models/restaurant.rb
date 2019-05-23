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
#  img_url      :string
#  open_time    :integer
#  close_time   :integer
#  type         :string
#  lat          :float
#  lng          :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# require "geocoder"

class Restaurant < ApplicationRecord
  validates :name, :address, :phone, presence: true
  validates :phone, uniqueness: true

  has_many :reviews,
    class_name: "Review",
    foreign_key: :restaurant_id

  has_many :menu_items,
           class_name: "MenuItem",
           foreign_key: :restaurant_id

  has_one_attached :photo

  def rating
    self.reviews.map { |r| r.rating.to_f }.sum / self.review_count
  end

  def review_count
    self.reviews.length
  end

  # def lng_lat
  #   results = Geocoder.search(self.address)
  #   console.log(results.first.coordinates)
  #   debugger
  # end

  def formatted_phone
    return "(" + self.phone[0..2] + ") " + self.phone[3...6] + "-" + self.phone[6..-1]
  end
end
