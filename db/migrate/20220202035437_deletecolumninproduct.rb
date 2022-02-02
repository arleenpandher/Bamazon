class Deletecolumninproduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :cost
  end
end
