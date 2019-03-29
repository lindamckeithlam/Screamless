class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone, null: false
      t.integer :open_time
      t.integer :close_time
      t.timestamps
    end
  end
end
