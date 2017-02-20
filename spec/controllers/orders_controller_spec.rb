require 'rails_helper'

RSpec.describe OrdersController, type: :controller do

  let(:order) { FactoryGirl.create(:order) }

  before :each do
    request.headers["accept"] = 'application/json'
  end

  describe " PUT#update" do
    it "Returns a JSON format response" do
      put :update, id: order.id, order: {status: 4}
      expect(response.content_type).to eq 'application/json'
    end

    it "Doesn't allow to change to lower status" do
      order.status = :delivered
      put :update, id: order.id, order: {status: :active}
      expect(order.status).to eq "delivered"
    end
  end

end
