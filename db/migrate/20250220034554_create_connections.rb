class CreateConnections < ActiveRecord::Migration[7.1]
  def change
    create_table :connections do |t|
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.references :connected_user, null: false, foreign_key: { to_table: :users }
      t.string :status, default: 'pending'
      
      t.timestamps
    end
  end
end
