# == Schema Information
#
# Table name: menu_items
#
#  id            :bigint(8)        not null, primary key
#  restaurant_id :integer          not null
#  price         :integer          not null
#  name          :string           not null
#  description   :string
#  category      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class MenuItem < ApplicationRecord
  validates :name, :price, presence: true

  belongs_to :restaurant,
             class_name: "Restaurant",
             foreign_key: :restaurant_id
end
