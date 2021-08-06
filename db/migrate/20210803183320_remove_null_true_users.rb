class RemoveNullTrueUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :company_name, true
    change_column_null :users, :industry_type, true
    change_column_null :users, :start_date, true
    change_column_null :users, :end_date, true
    change_column_null :users, :job_title, true
  end
end
