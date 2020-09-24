class Review < ApplicationRecord
  validates :author_id, :spot_id, :title, :body, presence: true
  validates :title, exclusion: { in: ["Title"], message: ": please add a title" }
  validates :body, exclusion: { in: ["Tell us about your experience!"], message: ": please add your experience" }

  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User

  belongs_to :spot, 
    primary_key: :id, 
    foreign_key: :spot_id, 
    class_name: :Spot
end
