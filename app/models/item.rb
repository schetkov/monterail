class Item < ActiveRecord::Base

  #RELATIONS
  belongs_to :order
  belongs_to :user

  #VALIDATIONS
  validates :name, :cost, presence: true
  validates :cost, numericality: { greater_than: 0 }
  validates :name, length: { min: 3 }
end
