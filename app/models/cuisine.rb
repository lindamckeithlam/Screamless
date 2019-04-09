# == Schema Information
#
# Table name: cuisines
#
#  id           :bigint(8)        not null, primary key
#  cuisine_name :string
#  img_url      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Cuisine < ApplicationRecord
  validates :cuisine_name, :img_url, presence: true
end
