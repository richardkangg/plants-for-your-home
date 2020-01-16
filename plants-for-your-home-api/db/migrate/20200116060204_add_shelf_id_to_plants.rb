class AddShelfIdToPlants < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :shelf_id, :integer
  end
end
