class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :type, :spot_type
  end
end
