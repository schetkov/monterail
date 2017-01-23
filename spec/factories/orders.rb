FactoryGirl.define do
  factory :order do
    date Faker::Date.between(1.year.ago, 1.year.from_now)
    status Faker::Number.between(0,4)
  end
end
