class CreateDesignerProfileSpecialties < ActiveRecord::Migration[7.1]
  def change
    create_table :designer_profile_specialties do |t|
      t.references :designer_profile, null: false, foreign_key: true
      t.references :specialty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
