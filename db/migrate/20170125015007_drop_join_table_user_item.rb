class DropJoinTableUserItem < ActiveRecord::Migration
  def change
    drop_join_table :users, :items
  end
end
