class AddUserIdToItems < ActiveRecord::Migration
  def change
    add_reference :items, :user, foreign_key: true
  end
end
