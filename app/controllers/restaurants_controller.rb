class RestaurantsController < ApplicationController

  respond_to :json

  def create
    @restaurant = Restaurant.find_or_create_by(restaurant_params)
    respond_to do |format|
      if @restaurant.save
        format.json {
          @order = Order.create(date: Time.zone.now.to_date, status: 0, restaurant: @restaurant)
          render json: { restaurant: @restaurant, order: @order }
        }
      end
    end
  end

  def destroy
    respond_to do |format|
      @restaurant = Restaurant.find(params[:id])
      if @restaurant.destroy
        format.json {
          render :json => '200'
        }
      end
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name)
  end
end
