class Fixrestaurants < ActiveRecord::Migration[5.2]
  def change
    drop_table :restaurants
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone, null: false
      t.string :cuisine_name
      t.float :rating
      t.float :price
      t.integer :open_time
      t.integer :close_time
      t.string :type
      t.float :lat
      t.float :lng
      t.timestamps
    end
  end
end
