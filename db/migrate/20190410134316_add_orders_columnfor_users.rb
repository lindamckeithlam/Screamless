class AddOrdersColumnforUsers < ActiveRecord::Migration[5.2]
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
      t.text :orders, array: true, default: []
      t.timestamps
      t.index :session_token, unique: true
    end
  end
end
