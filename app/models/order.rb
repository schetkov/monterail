class Order < ActiveRecord::Base

  validates :date, :status, presence: true

  enum status: [:active, :finalized, :ordered, :delivered]

end
