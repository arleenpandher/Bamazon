class AddColumntoProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :about, :text
  end
end
