class Restaurant < ActiveRecord::Base

  #RELATIONS
  has_many :orders, dependent: destroy

  #VALIDATIONS
  validates :name, presence: true

end
