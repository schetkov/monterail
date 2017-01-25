class Restaurant < ActiveRecord::Base

  #RELATIONS
  has_many :orders

  #VALIDATIONS
  validates :name, presence: true

end
