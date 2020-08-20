class AddCoastalColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :coastal, :boolean, null: false
  end
end
