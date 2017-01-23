require 'rails_helper'

describe "Item" do

  let(:order) { FactoryGirl.create(:order) }

  subject { order }

  it "Should respond to DATE attribute" do
    expect(order).to respond_to(:date)
  end

  it "Should respond to STATUS attribute" do
    expect(order).to respond_to(:status)
  end

  describe "When something is not right" do
    it "Should not be valid without DATE" do
      invalid_order = order.dup
      invalid_order.date = nil
      invalid_order.save
      expect(invalid_order).to_not be_valid
    end
    it "Should not be valid without STATUS" do
      invalid_order = order.dup
      invalid_order.status = nil
      invalid_order.save
      expect(invalid_order).to_not be_valid
    end
  end

end
