class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :designer_profile_id
      t.integer :business_profile_id
      t.integer :seeker_profile_id

      t.timestamps
    end
  end
end
