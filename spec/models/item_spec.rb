require 'rails_helper'

describe "Item" do

  it "Has a valid factory" do
    expect(build(:item)).to be_valid
  end

  let(:item) { FactoryGirl.create(:item) }

  describe "AR validations for ITEM" do
    it { expect(item).to validate_presence_of(:name) }
    it { expect(item).to validate_presence_of(:cost) }
    it { expect(item).to validate_numericality_of(:cost).is_greater_than(0) }
    it { expect(item).to ensure_length_of(:name).is_at_leasts(4) }
  end

  describe "AR associations for ITEM" do
    it { expect(item).to belong_to(:order) }
    it { expect(item).to belong_to(:user) }
  end

  context "Callbacks for ITEM" do
    #
  end


  describe "Scopes for ITEM" do
    #
  end

  describe "Public instance methods for ITEM" do
    context "Responds to it's methods" do
      #
    end

    context "Executes methods correctly" do
      #
    end
  end

  describe "Public class methods for ITEM" do
    context "Responds to it's methods" do
      #
    end

    context "Executes methods correctly" do
      #
    end
  end

  # it "Should respond to NAME attribute" do
  #   expect(item).to respond_to(:name)
  # end

  # it "Should respond to COST attribute" do
  #   expect(item).to respond_to(:cost)
  # end

  # it "Should be valid with NAME and COST attributes" do
  #  expect(item).to be_valid
  # end

  # describe "When something is not right" do
  #   it "Should not be valid without NAME" do
  #     invalid_item = item.dup
  #     invalid_item.name = nil
  #     invalid_item.save
  #     expect(invalid_item).to_not be_valid
  #   end
  #   it "Should not be valid without COST" do
  #     invalid_item = item.dup
  #     invalid_item.cost = nil
  #     invalid_item.save
  #     expect(invalid_item).to_not be_valid
  #   end
  # end

end
