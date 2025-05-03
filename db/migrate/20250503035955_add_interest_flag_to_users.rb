class AddInterestFlagToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :interested_in_building_profile, :boolean
  end
end
