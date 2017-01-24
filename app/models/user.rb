class User < ActiveRecord::Base

  validates :provider, :name, :uid, presence: true

  def self.create_with_omniauth
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["nickname"]
    end
  end

end
