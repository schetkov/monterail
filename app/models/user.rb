class User < ActiveRecord::Base

  #RELATIONS
  has_many :items

  #VALIDATIONS
  validates :provider, :name, :uid, presence: true

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"] || auth["info"]["nickname"]
    end
  end

end
