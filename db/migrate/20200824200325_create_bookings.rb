class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :booker_id, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :total_nights, null: false  
      t.float :total_price, null: false
      t.integer :guests, null: false
      t.timestamps
    end
    add_index :bookings, :spot_id
    add_index :bookings, :booker_id

  end
end
