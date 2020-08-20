class Spot < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :host_id, :description, :lat, :lng, :park, :spot_type, :price_per_night, :minimum_nights, :maximum_occupancy, :nearby_attractions, :sites, :guests_per_site, presence: true
    validates_inclusion_of :bring_your_own_tents, :park_at_listing, :ada_access, :toilet_available, :campfires, :picnic_table_available, :potable_water, :kitchen, :showers, in: [true, false]
    validates_inclusion_of :wifi, :bins_available, :laundry, :electrical_hookup, :water_hookup, :generator_allowed, :sewage_hookup, :tv_hookup, :pull_in_site, in: [true, false]
    validates_inclusion_of :slideouts, :biking, :hiking, :boating, :fishing, :paddling, :swimming, :snow_sports, :wildlife_watching, :climbing, :horseback_riding, :off_roading, :mountainous, :forest, :desert, :coastal, in: [true, false]
    validates :check_in_details, :check_out_details, :cancellation_policy, :on_arrival, :booking_acceptance, presence: true
    
    after_initialize :ensure_maximum_occupancy

    belongs_to :host, 
        primary_key: :id,
        foreign_key: :host_id, 
        class_name: :User

    def ensure_maximum_occupancy
        self.maximum_occupancy ||= (self.sites * self.guests_per_site)
    end 


end
