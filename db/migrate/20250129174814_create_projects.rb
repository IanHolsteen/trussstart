class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
