class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false 
      t.string :description, null: false 
      t.integer :service_id, null: false 
      t.timestamps
    end
    add_index :products, :service_id
  end
end
