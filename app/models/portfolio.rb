class Portfolio < ApplicationRecord
  belongs_to :designer_profile, optional: true
  belongs_to :business_profile, optional: true
  belongs_to :seeker_profile, optional: true

  has_many :projects
end
