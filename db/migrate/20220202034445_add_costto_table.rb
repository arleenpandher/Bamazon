class AddCosttoTable < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :cost, :integer
  end
end
