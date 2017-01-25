class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :current_order, :current_restaurant

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def current_order
    @current_order ||= Order.where("created_at >= ?", Time.zone.now.beginning_of_day).first
  end

end
