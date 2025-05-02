class DesignerProfile < ApplicationRecord
  belongs_to :user
  has_one :portfolio
  has_one :mood_board
  has_many :connections
  has_many :reviews
  has_one_attached :photo
  has_one_attached :cover_photo
  has_many :designer_profile_specialties
  has_many :specialties, through: :designer_profile_specialties

  validates :price_range, inclusion: { in: 1..5 }, allow_nil: true

  validates :star_rating, inclusion: { in: 1..5 }, allow_nil: true

  attribute :lgbtq_owned, :boolean, default: false
  attribute :minority_owned, :boolean, default: false
  attribute :fluent_in_spanish, :boolean, default: false

end
