class MoodBoard < ApplicationRecord
  belongs_to :designer_profile
  belongs_to :business_profile
  belongs_to :seeker_profile
end
