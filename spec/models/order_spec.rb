require 'rails_helper'

describe "Order" do

  it "Has a valid factory" do
    expect(build(:order)).to be_valid
  end

  let(:order) { build(:order) }

  describe "AR validations" do
    it { expect(order).to validate_presence_of(:date) }
    it { expect(order).to validate_presence_of(:status) }
    it { expect(order).to ensure_inclusion_of(:status).in_array(['active','finalized', 'ordered', 'delivered'])}
  end

  describe "AR associations" do
    it { expect(order).to belong_to(:restaurant) }
    it { expect(order).to have_many(:items).dependent(:destroy) }
  end

  
  
  # subject { order }

  # it "Should respond to DATE attribute" do
  #   expect(order).to respond_to(:date)
  # end

  # it "Should respond to STATUS attribute" do
  #   expect(order).to respond_to(:status)
  # end

  # describe "When something is not right" do
  #   it "Should not be valid without DATE" do
  #     invalid_order = order.dup
  #     invalid_order.date = nil
  #     invalid_order.save
  #     expect(invalid_order).to_not be_valid
  #   end
  #   it "Should not be valid without STATUS" do
  #     invalid_order = order.dup
  #     invalid_order.status = nil
  #     invalid_order.save
  #     expect(invalid_order).to_not be_valid
  #   end
  # end

end
