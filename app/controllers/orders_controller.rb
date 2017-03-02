class OrdersController < ApplicationController

  respond_to :json

  def update
    respond_to do |format|
      @order = Order.find(params[:id])
      if params[:status].to_i >= Order.statuses[@order.status]
        @order.update_attributes(status: params[:status].to_i)
        format.json {render json: @order }
      else
        format.json { render json: { error: "Order status can't be changed that way!" }, status: 422 }
      end
    end
  end

  private

  def order_params
    params.require(:order).permit(:status)
  end
end
