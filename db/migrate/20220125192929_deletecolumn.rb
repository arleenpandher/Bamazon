class Deletecolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :services, :image_url
  end
end
