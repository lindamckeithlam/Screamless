class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body
      t.integer :rating, null: false
      t.integer :reviewer_id, null: false
      t.integer :restaurant_id, null: false
      t.index :reviewer_id, unique: true
      t.index :restaurant_id, unique: true
      t.timestamps
    end
  end
end
