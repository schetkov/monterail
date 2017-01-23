class Item < ActiveRecord::Base

  validates :name, :cost, presence: true

end
