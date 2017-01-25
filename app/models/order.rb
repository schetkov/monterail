class Order < ActiveRecord::Base

  # RELATIONS
  has_many :items
  belongs_to :restaurant

  #VALIDATIONS
  validates :date, :status, presence: true

  # SCOPES
  scope :archieved, -> { where('created_at < ?', Time.zone.now.beginning_of_day) }
  scope :active, -> { where(status: 0) }

  enum status: [:active, :finalized, :ordered, :delivered]

end
