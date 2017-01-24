class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: current_user.name }
  end
end
