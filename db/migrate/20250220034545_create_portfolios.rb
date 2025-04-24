class CreatePortfolios < ActiveRecord::Migration[7.1]
  def change
    create_table :portfolios do |t|
      t.references :designer_profile, null: true, foreign_key: true
      t.references :business_profile, null: true, foreign_key: true
      t.references :seeker_profile, null: true, foreign_key: true

      t.timestamps
    end
  end
end
