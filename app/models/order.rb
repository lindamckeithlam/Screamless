# == Schema Information
#
# Table name: orders
#
#  id                    :bigint(8)        not null, primary key
#  user_id               :integer          not null
#  restaurant_id         :integer          not null
#  restaurant_name       :string           not null
#  subtotal              :float            not null
#  tax                   :float            not null
#  tip                   :float
#  delivery_fee          :float
#  total                 :float            not null
#  delivery_instructions :string
#  items                 :string
#

class Order < ApplicationRecord
  validates :subtotal, :tax, :total, presence: true

  belongs_to :user,
             class_name: :User,
             foreign_key: :user_id

  belongs_to :restaurant,
             class_name: :Restaurant,
             foreign_key: :restaurant_id

  def order_date
    time = self.created_at.strftime("%H:%M").split(":")
    date = self.created_at.strftime("%b %d, %Y")
    if (time[0].to_i) > 12
      time[0] = time[0].to_i - 12
      time = time.join(":")
      date + " " + time + " PM"
    else
      if time.first == "00"
        time[0] = "12"
      end
      date + " " + time.join(":") + " AM"
    end
  end
end
