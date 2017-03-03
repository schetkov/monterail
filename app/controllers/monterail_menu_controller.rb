class MonterailMenuController < ApplicationController

  include MonterailMenuHelper

  def index
    if current_user
      @page_init_props = { name: current_user.name }

      # Preventing N + 1 issue
      restaurants = Restaurant.includes(:orders)

      @store_init_props = {
        user: current_user,
        restaurant: current_order.try(:restaurant),
        known_restaurants: Restaurant.all.collect {|x| {id: x.id, name: x.name} },
        order: {
          currentOrder: current_order,
          currentOrderItems: current_order ? current_order.items : nil,
          orderedItem: current_order ? Item.find_by(user_id: current_user.id, order_id: current_order.id) : nil,
          archievedOrders: archieved_orders_array,
          activeOrders: Order.includes(:items).active,
          },
      }
    end
  end
end
