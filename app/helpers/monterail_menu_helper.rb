module MonterailMenuHelper

  def archieved_orders_array
    archieved_orders = Order.archieved.map {|order| {
      date: order.created_at.to_date.strftime("%B %d, %Y"),
      itemsCount: order.items.count,
      items: order.items.map { |order_item| {item_name: order_item.name, item_cost: order_item.cost}},
      restaurant: order.restaurant.name,
      totalCost: order.items.map(&:cost).inject(0, &:+),}
    }.reverse
  end

end
