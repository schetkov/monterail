require 'rails_helper'

RSpec.describe ItemsController, type: :controller do

  let(:user) { FactoryGirl.create(:user) }
  let(:order) { FactoryGirl.create(:order) }

  before :each do
    request.headers["accept"] = 'application/json'
    controller.stub(:current_user).and_return(user)
    controller.stub(:current_order).and_return(order)
  end

  describe " POST#create" do

    it "Creates a new item" do
      items_count = Item.all.count
      post :create, {item: {name: "Test item", cost: "200.00", user_id: user.id }}
      expect(items_count).to eq Item.all.count - 1
    end

    it "Should return a JSON type response" do
      post :create, {item: {name: "Test item", cost: "200.00", user_id: user.id }}
      expect(response.content_type).to eq "application/json"
    end

    it "Should add new item to ORDER" do
      order_items_count = order.items.count
      post :create, {item: {name: "Test item", cost: "200.00", user_id: user.id }}
      expect(order_items_count).to eq order.items.count - 1
    end

    it "Should add new item to USER" do
      user_items_count = order.items.count
      post :create, {item: {name: "Test item", cost: "200.00", user_id: user.id }}
      expect(user_items_count).to eq user.items.count - 1
    end

  end

end
