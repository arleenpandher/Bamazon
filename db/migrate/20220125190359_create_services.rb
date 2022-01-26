class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :title, null: false
      t.string :image_url, null: false  
      t.timestamps
    end
    add_index :services, :title
  end
end
