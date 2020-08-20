class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false 
      t.integer :host_id, null: false
      t.text :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :park, null: false
      t.string :type, null: false 
      t.float :price_per_night, null: false
      t.integer :minimum_nights, null: false
      t.integer :maximum_occupancy, null: false
      t.string :nearby_attractions, null: false
      t.boolean :bring_your_own_tents, null: false
      t.integer :sites, null: false
      t.integer :guests_per_site, null: false
      t.boolean :park_at_listing, null: false
      t.boolean :ada_access, null: false
      t.boolean :toilet_available, null: false
      t.boolean :campfires, null: false
      t.boolean :picnic_table_available, null: false
      t.boolean :potable_water, null: false
      t.boolean :kitchen, null: false
      t.boolean :showers, null: false
      t.boolean :wifi, null: false
      t.boolean :bins_available, null: false
      t.boolean :laundry, null: false
      t.boolean :electrical_hookup, null: false
      t.boolean :water_hookup, null: false
      t.boolean :generator_allowed, null: false
      t.boolean :sewage_hookup, null: false
      t.boolean :tv_hookup, null: false
      t.boolean :pull_in_site, null: false
      t.string :surface_type
      t.integer :max_length
      t.string :surface_levelness
      t.boolean :slideouts, null: false
      t.string :lodging_type
      t.boolean :biking, null: false
      t.boolean :hiking, null: false
      t.boolean :boating, null: false
      t.boolean :fishing, null: false
      t.boolean :paddling, null: false
      t.boolean :swimming, null: false
      t.boolean :snow_sports, null: false
      t.boolean :wildlife_watching, null: false
      t.boolean :climbing, null: false
      t.boolean :horseback_riding, null: false
      t.boolean :off_roading, null: false
      t.boolean :mountainous, null: false
      t.boolean :forest, null: false
      t.boolean :desert, null: false
      t.string :weather
      t.string :elevation
      t.string :distance
      t.string :check_in_details, null: false
      t.string :check_out_details, null: false
      t.string :cancellation_policy, null: false
      t.string :on_arrival, null: false
      t.string :booking_acceptance, null: false
      t.timestamps
    end
    add_index :spots, :name, unique: true
    add_index :spots, :host_id
  end
end
