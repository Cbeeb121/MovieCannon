class Classifications < ActiveRecord::Migration[5.2]
  def change
    create_table :classifications do |t|
      t.column :name, :string
    end
  end
end
