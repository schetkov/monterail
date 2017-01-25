require 'rails_helper'

RSpec.describe ItemsController, type: :controller do

  before :each do
    request.headers["accept"] = 'application/json'
  end
  
  describe "GET #create" do
    it "returns http success" do
      get :create, item: { name: "SomeName", cost: 15.25 }
      expect(response).to have_http_status(:success)
    end
  end

end
