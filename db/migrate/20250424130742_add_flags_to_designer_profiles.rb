class AddFlagsToDesignerProfiles < ActiveRecord::Migration[7.1]
  def change
    add_column :designer_profiles, :lgbtq_owned, :boolean
    add_column :designer_profiles, :minority_owned, :boolean
    add_column :designer_profiles, :fluent_in_spanish, :boolean
  end
end
