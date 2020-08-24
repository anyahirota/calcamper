class Booking < ApplicationRecord
    validates :spot_id, :booker_id, :total_nights, :total_price, :guests, presence: true
    validates :check_in_date, :check_out_date, presence: true
    validate :check_out_date_after_check_in_date


    belongs_to :guest,
        primary_key: :id,
        foreign_key: :booker_id, 
        class_name: :User 
    
    belongs_to :spot, 
        primary_key: :id,
        foreign_key: :spot_id, 
        class_name: :Spot

    private

    def check_out_date_after_check_in_date
        return if check_in_date.blank? || check_out_date.blank?

        if check_out_date < check_in_date
        errors.add(:check_out_date, "must be after the check in date")
        end
    end

end
