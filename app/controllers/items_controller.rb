class ItemsController < ApplicationController
  respond_to :json

  def create
    @item = Item.create(item_params)
    current_order.items << @item
    current_user.items << @item

    respond_to do |format|
      if current_order.items.any? {|item| item.id == @item.id}
        format.json {
          render json: @item
        }
      end
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :cost, :user_id)
  end
end
