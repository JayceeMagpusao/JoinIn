class Updatecommentcolumnname < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :comment, :body
  end
end
