class DropJoinTableOrderItem < ActiveRecord::Migration
  def change
    drop_join_table :orders, :items
  end
end
