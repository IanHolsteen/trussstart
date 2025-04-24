class RemovePhotoFromDesignerProfiles < ActiveRecord::Migration[7.1]
  def change
    remove_column :designer_profiles, :photo, :string
  end
end
