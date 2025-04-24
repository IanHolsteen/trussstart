class AddStarRatingToDesignerProfiles < ActiveRecord::Migration[7.1]
  def change
    add_column :designer_profiles, :star_rating, :integer
  end
end
