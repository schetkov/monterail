class MonterailMenuController < ApplicationController

  include MonterailMenuHelper

  def index
    @page_init_props = { name: current_user.try(:name) || "Stranger" }

    @store_init_props = {
      user: current_user,
      restaurant: current_order.try(:restaurant),
      known_restaurants: Restaurant.all.collect {|x| {id: x.id, name: x.name} },
      order: {
        currentOrder: current_order,
        currentOrderItems: Item.where(order_id: current_order.try(:id)),
        orderedItem: Item.find_by(user_id: current_user.try(:id), order_id: current_order.try(:id)),
        archievedOrders: archieved_orders_array,
        activeOrders: Order.active,
        },
    }
  end
end
