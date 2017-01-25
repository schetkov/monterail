class AddReferencesFieldsToRestaurantAndOrder < ActiveRecord::Migration
  def change
    add_column :items, :order_id, :integer
    add_column :orders, :restaurant_id, :integer
  end
end
