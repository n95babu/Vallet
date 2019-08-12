class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.string :coin
      t.float :amount
      t.references :users, foreign_key: true

      t.timestamps
    end
  end
end
