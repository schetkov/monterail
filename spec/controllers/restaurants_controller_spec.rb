require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do

  let(:order) { FactoryGirl.create(:order) }

  before :each do
    request.headers["accept"] = 'application/json'
  end

  describe "POST#create" do
    it "Should return a JSON format response" do
      post :create, {restaurant: {name: "New restaurant"}}
    end

    it "Response should contain both Restaurant and Order items" do
      post :create, {restaurant: {name: "New restaurant"}}
      formatted_body = JSON.parse(response.body)
      expect(formatted_body).to have_key 'restaurant'
      expect(formatted_body).to have_key 'order'
    end

    it "Should create new order if restaurant restaurant#create call is successfull" do
      orders_count = Order.all.count
      post :create, {restaurant: {name: "New restaurant"}}
      expect(orders_count).to eq Order.all.count - 1
    end
  end

end
