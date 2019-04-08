class FixCuisinesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :cusines
    create_table :cuisines do |t|
      t.string :cuisine_name
      t.string :img_url
      t.timestamps
    end
  end
end
