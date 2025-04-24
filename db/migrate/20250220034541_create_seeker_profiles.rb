class CreateSeekerProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :seeker_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :photo
      t.string :name
      t.string :location
      t.string :language
      t.text :bio

      t.timestamps
    end
  end
end
