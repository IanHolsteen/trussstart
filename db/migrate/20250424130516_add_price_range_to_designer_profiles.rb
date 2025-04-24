class AddPriceRangeToDesignerProfiles < ActiveRecord::Migration[7.1]
  def change
    add_column :designer_profiles, :price_range, :integer
  end
end
