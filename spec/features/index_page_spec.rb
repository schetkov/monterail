require 'rails_helper'

feature "Title page" do

  scenario "visit" do
    visit "/"
    expect(page).to have_title "MonterailTest"
    expect(page).to have_css "h1", text: "Monterail Meal Ordering System"
  end

end
