require 'rails_helper'

describe "User" do

  let(:user) { FactoryGirl.create(:user) }
  let(:item) { FactoryGirl.create(:item) }

  subject { user }

  it "Should respond to NAME attribute" do
  	expect(user).to respond_to(:name)
  end

  it "Should respond to PROVIDER attribute" do
  	expect(user).to respond_to(:provider)
  end

  it "Should respond to UID attribute" do
  	expect(user).to respond_to(:uid)
  end

  it "Should be valid with PROVIDER, NAME and UID attributes" do
   expect(user).to be_valid
  end

  describe "When something is not right" do
    it "Should not be valid without PROVIDER" do
    	invalid_user = user.dup
    	invalid_user.provider = nil
    	invalid_user.save
      expect(invalid_user).to_not be_valid
  	end
  	it "Should not be valid without NAME" do
    	invalid_user = user.dup
      invalid_user.name = nil
      invalid_user.save
      expect(invalid_user).to_not be_valid
  	end
  	it "Should not be valid without UID" do
    	invalid_user = user.dup
      invalid_user.uid = nil
      invalid_user.save
      expect(invalid_user).to_not be_valid
  	end
  end

  describe "Adding related objects" do
    it "Adding new OrderItem" do
      user.items << item
      expect([user.items]).to be_equal([item])
    end
  end

end
