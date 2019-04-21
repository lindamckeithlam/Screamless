class AddItemsColumnToOrderTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :users
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number
      t.string :address
      t.timestamps
      t.index :session_token, unique: true
    end
  end

  def change
    drop_table :orders
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
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
