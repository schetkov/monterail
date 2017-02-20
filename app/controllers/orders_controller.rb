class OrdersController < ApplicationController

  respond_to :json

  def update
    respond_to do |format|
      @order = Order.find(params[:id])
      @order.update_attributes(status: params[:status].to_i) if params[:status].to_i >= Order.statuses[@order.status]
      format.json {render json: @order}
    end
  end

  private

  def order_params
    params.require(:order).permit(:status)
  end
end
