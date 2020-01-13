class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :stage
      t.string :kind
      t.string :image
    end
  end
end
