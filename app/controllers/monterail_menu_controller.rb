class MonterailMenuController < ApplicationController
  def index
    archievedOrders = []
    Order.archieved.each do |archOrder|
      archievedOrders << {
        date: archOrder.created_at.to_date,
        itemsCount: archOrder.items.count,
        restaurant: archOrder.try(:restaurant).try(:name),
        totalCost: archOrder.items.map(&:cost).inject(0, &:+)
      }
    end
    @hello_world_props = { name: current_user.try(:name) || "Stranger" }
    @store_init_props = {
      user: current_user,
      restaurant: current_order.try(:restaurant),
      order: {
        currentOrder: current_order,
        currentOrderItems: Item.where(order_id: current_order.try(:id)),
        orderedItem: Item.find_by(user_id: current_user.try(:id), order_id: current_order.try(:id)),
        archievedOrders: archievedOrders,
        activeOrders: Order.active,
        },
    }
  end
end
