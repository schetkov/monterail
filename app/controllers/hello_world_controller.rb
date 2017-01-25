class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: current_user.try(:name) || "Stranger" }
  end
end
