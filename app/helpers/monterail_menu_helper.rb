module MonterailMenuHelper

  def archieved_orders_array
    archieved_orders = []
    Order.archieved.each do |archOrder|
      archieved_orders << {
        date: archOrder.created_at.to_date,
        itemsCount: archOrder.items.count,
        restaurant: archOrder.try(:restaurant).try(:name),
        totalCost: archOrder.items.map(&:cost).inject(0, &:+)
      }
    end
    return archieved_orders
  end

end
