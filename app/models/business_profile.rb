class BusinessProfile < ApplicationRecord
  belongs_to :user
  has_many :portfolios
end
