class AddTypeToMenuItemTableAgain < ActiveRecord::Migration[5.2]
  def change
    drop_table :menu_items
    create_table :menu_items do |t|
      t.integer :restaurant_id, null: false
      t.integer :price, null: false
      t.string :name, null: false
      t.string :description
      t.string :category
      t.timestamps
    end
  end
end
