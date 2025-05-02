class Specialty < ApplicationRecord
    has_many :designer_profile_specialties
    has_many :designer_profiles, through: :designer_profile_specialties
end
