require 'rails_helper'

describe "Item" do

  let(:item) { FactoryGirl.create(:item) }

  subject { item }

  it "Should respond to NAME attribute" do
    expect(item).to respond_to(:name)
  end

  it "Should respond to COST attribute" do
    expect(item).to respond_to(:cost)
  end

  it "Should be valid with NAME and COST attributes" do
   expect(item).to be_valid
  end

  describe "When something is not right" do
    it "Should not be valid without NAME" do
      invalid_item = item.dup
      invalid_item.name = nil
      invalid_item.save
      expect(invalid_item).to_not be_valid
    end
    it "Should not be valid without COST" do
      invalid_item = item.dup
      invalid_item.cost = nil
      invalid_item.save
      expect(invalid_item).to_not be_valid
    end
  end

end
