Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GIT_ID'], ENV['GIT_SECRET'], scope: "user:email,user:follow"
end
