# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  body          :text
#  rating        :integer          not null
#  restaurant_id :integer          not null
#  reviewer_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, presence: true
  belongs_to :restaurant,
             class_name: "Restaurant",
             foreign_key: :restaurant_id

  belongs_to :user,
             class_name: "User",
             foreign_key: :reviewer_id
end
