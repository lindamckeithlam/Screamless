class AddRestaurantNameColToOrdersTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :orders
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.string :restaurant_name, null: false
      t.float :subtotal, null: false
      t.float :tax, null: false
      t.float :tip
      t.float :delivery_fee
      t.float :total, null: false
      t.string :delivery_instructions
      t.string :items
      t.index :restaurant_id, name: "index_orders_on_restaurant_id"
      t.index :user_id, name: "index_orders_on_user_id"
    end
  end
end
