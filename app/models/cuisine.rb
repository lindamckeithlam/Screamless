class Cuisine < ApplicationRecord
  validates :cuisine_name, :img_url, presence: true
end
