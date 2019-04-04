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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
