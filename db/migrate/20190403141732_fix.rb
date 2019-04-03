class Fix < ActiveRecord::Migration[5.2]
  def change
    drop_table :reviews
    create_table :reviews do |t|
      t.text :body
      t.integer :rating, null: false
      t.integer :restaurant_id, null: false
      t.integer :reviewer_id, null: false
      t.index :reviewer_id
      t.index :restaurant_id
      t.timestamps
    end
  end
end
