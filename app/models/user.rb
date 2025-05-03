class User < ApplicationRecord
    has_secure_password
    has_many :carts

    has_one :designer_profile, dependent: :destroy
    has_one :business_profile, dependent: :destroy
    has_one :seeker_profile, dependent: :destroy
  
    has_many :connections
    has_many :user_roles

    has_many :sent_conversations, class_name: "Conversation", foreign_key: "sender_id"
    has_many :received_conversations, class_name: "Conversation", foreign_key: "receiver_id"
    has_many :messages
  
    has_many :reviews_given, class_name: "Review", foreign_key: "reviewer_id"
    has_many :reviews_received, class_name: "Review", foreign_key: "reviewee_id"  

    validates :email, presence: true, uniqueness: true, format: {
        with: URI::MailTo::EMAIL_REGEXP,
        message: "must be a valid email format"
    }

    validates :password, confirmation: true, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
    validates :password_confirmation, presence: true, if: -> { new_record? || !password.nil? }
    

    def all_projects
        if business_profile
          business_profile.portfolios.flat_map(&:projects)
        elsif designer_profile
          designer_profile.portfolios.flat_map(&:projects)
        else
          []
        end
    end

    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    end

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
end
