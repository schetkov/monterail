FactoryGirl.define do
  factory :item do
    name Faker::Commerce.product_name
    cost Faker::Number.decimal(2)
  end
end
