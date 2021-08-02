class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :company_name, null: false
      t.string :industry_type, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :job_title, null: false

      t.timestamps
    end
      add_index :users, :email, unique: true
      add_index :users, :session_token, unique: true
      add_index :users, :first_name
      add_index :users, :last_name
      add_index :users, :company_name
      add_index :users, :industry_type
      add_index :users, :job_title
  end
end
