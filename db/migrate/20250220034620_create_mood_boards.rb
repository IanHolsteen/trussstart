class CreateMoodBoards < ActiveRecord::Migration[7.1]
  def change
    create_table :mood_boards do |t|
      t.references :designer_profile, null: false, foreign_key: true
      t.references :business_profile, null: false, foreign_key: true
      t.references :seeker_profile, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
