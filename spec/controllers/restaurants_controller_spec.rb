require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do

  before :each do
    request.headers["accept"] = 'application/json'
  end

  describe "GET #create" do
    it "returns http success" do
      get :create, restaurant: { name: "New restaurant" }
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #destroy" do
    it "returns http success" do
      get :destroy, id: 1
      expect(response).to have_http_status(:success)
    end
  end

end
