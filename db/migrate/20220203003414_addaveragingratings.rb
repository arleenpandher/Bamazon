class Addaveragingratings < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :ratings, :integer 
  end
end
