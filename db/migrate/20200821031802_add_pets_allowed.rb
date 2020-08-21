class AddPetsAllowed < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :pets_allowed, :boolean, null: false
  end
end
