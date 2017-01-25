require 'rails_helper'

RSpec.describe OrdersController, type: :controller do

  before :each do
    request.headers["accept"] = 'application/json'
  end
  
  describe "GET #update" do
    it "returns http success" do
      get :update, order: { date: Time.zone.now.to_date, status: 1 }
      expect(response).to have_http_status(:success)
    end
  end

end
