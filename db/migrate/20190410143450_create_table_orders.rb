class CreateTableOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.float :subtotal, null: false
      t.float :tax, null: false
      t.float :tip
      t.float :delivery_fee
      t.float :total, null: false
      t.string :delivery_instructions
      t.index [:restaurant_id]
      t.index [:user_id]
      t.timestamps
    end
  end
end
