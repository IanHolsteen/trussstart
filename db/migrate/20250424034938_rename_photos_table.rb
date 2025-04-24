class RenamePhotosTable < ActiveRecord::Migration[7.0] # Adjust version as needed
  def change
    rename_table :photos, :project_photos #  Change to a suitable name
  end
end
