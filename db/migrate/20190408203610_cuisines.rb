class Cuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :cusines do |t|
      t.string :cuisine_name
      t.string :img_url
      t.timestamps
    end
  end
end
