class Item < ActiveRecord::Base

  #RELATIONS
  belongs_to :order
  belongs_to :user

  #VALIDATIONS
  validates :name, :cost, presence: true

end
