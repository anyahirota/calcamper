class User < ApplicationRecord
    # validates :email, exclusion: { in: ["Email address"]}, message: ": please enter your email." }
    # validates :email, format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :first_name, exclusion: { in: ["First name"], message: ": please enter your first name" }
    validates :last_name, exclusion: { in: ["Last name"], message: ": please enter your last name" }
    validates :password, exclusion: { in: ["Create a password"], message: ": please create a password" }
    validates :password_digest, :first_name, :last_name, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password 

    has_many :properties, 
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Spot
    
    has_many :bookings, 
        primary_key: :id,
        foreign_key: :booker_id,
        class_name: :Booking
    
    has_many :booked_spots, 
        through: :bookings, 
        source: :spot

    has_many :reviews, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: :Review

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil 
        end 
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end 

end
