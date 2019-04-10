# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require "faker"
require "open-uri"
Restaurant.destroy_all
MenuItem.destroy_all
User.destroy_all
Review.destroy_all
Cuisine.destroy_all

User.create({
  first_name: "Demo",
  last_name: "User",
  password: "blackbearsarebest",
  email: "demo@demouser.com",
})

User.create({
  first_name: "Linda",
  last_name: "Mckeith",
  password: "starwars",
  email: "linda@screamless.com",
})

User.create({
  first_name: "Steven",
  last_name: "D",
  password: "starwars",

  email: "steven@screamless.com",
})

User.create({
  first_name: "Kit",
  last_name: "Harington",
  password: "youknownothing",

  email: "jonsno@screamless.com",
})

User.create({
  first_name: "Aria",
  last_name: "Stark",
  password: "agirlhasnoname",

  email: "aria@screamless.com",
})

User.create({
  first_name: "David",
  last_name: "Dickinson",
  password: "thatmakesoneofus",

  email: "david@david.com",
})

User.create({
  first_name: "JJ",
  last_name: "Yang",
  password: "helpmesoomi",

  email: "helpme@robinhood.com",
})

User.create({
  first_name: "Mike",
  last_name: "Mike",
  password: "bubbletea",

  email: "mike@petsy.com",
})

User.create({
  first_name: "Nick",
  last_name: "Schneider",
  password: "lasagna",

  email: "meansiloveyou@italian.com",
})

nyc_addresses = ["25 St Marks Pl, New York, NY 10003", "108 E 4th St, New York, NY 10003", "230 5th Ave, New York, NY 10001",
                 "18 9th Ave, New York, NY 10014", "27 W 24th St, New York, NY 10010", "205 W 29th St, New York, NY 10001", "286 8th Ave, New York, NY 10001",
                 "335 8th Ave, New York, NY 10001", "17 W 32nd St, New York, NY 10001", "88 Madison Ave, New York, NY 10016",
                 "200 5th Ave, New York, NY 10010", "172 7th Ave, New York, NY 10011", "232 8th Ave, New York, NY 10011",
                 "172 7th Ave #3, New York, NY 10011", "202 8th Ave, New York, NY 10011", "247 W 30th St, New York, NY 10001", "148 W 24th St, New York, NY 10011",
                 "138 W 29th St, New York, NY 10001", "343 7th Ave, New York, NY 10001", "330 7th Ave, New York, NY 10001",
                 "1178 Broadway, New York, NY 10001", "352 7th Ave, New York, NY 10001", "140 W 30th St, New York, NY 10001", "342 7th Ave, New York, NY 10001",
                 "283 7th Ave, New York, NY 10001", "162 E 33rd St, New York, NY 10016", "548 3rd Ave, New York, NY 10016", "42 E 20th St, New York, NY 10003", "15 Irving Pl, New York, NY 10003",
                 "622 3rd Ave, New York, NY 10017", "210 E 46th St, New York, NY 10017", "1114 6th Ave, New York, NY 10036", "248 E 52nd St, New York, NY 10022",
                 "302 E 49th St, New York, NY 10017", "127 E 47th St, New York, NY 10017", "158 E 48th St, New York, NY 10017", "217 E 49th St, New York, NY 10017", "712 3rd Ave, New York, NY 10017",
                 "245 Park Ave, New York, NY 10167", "200 Park Ave, New York, NY 10166", "551 5th Ave, New York, NY 10017", "201 Park Ave, New York, NY 10166", "89 E 42nd St, New York, NY 10017", "90, 5409, E 42nd St, New York, NY 10017", "555 5th Ave, New York, NY 10017",
                 "301 Park Ave, New York, NY 10022", "45 E 45th St, New York, NY 10017", "230 Park Ave, New York, NY 10017", "70 Vanderbilt Ave, New York, NY 10017",
                 "E 47th St & Park Ave, New York, NY 10017", "101 E 47th St, New York, NY 10017"]

images = ["https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner2.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner3.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner4.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner5.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner6.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner8.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner9.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner10.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner11.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner12.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner13.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/dennis-prescott-fried-chicken.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner14.jpg",
          "https://s3.us-east-2.amazonaws.com/screamless-seed/resbanner15.jpg",
          "https://vietnam.travel/sites/default/files/inline-images/Vietnamese%20food.jpg"]

cuisine_images = ["https://twtx.co/wp-content/uploads/2017/07/Ritas-Enchiladas-1600x800.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/vietnam%20pho-2.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/1016%20AJS%20Vietnam%20TAB%20Hanoi%20Pho-09.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/mekong%20delta%20restaurants-14.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/top-vietnamese-dishes-2_2.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/1016%20AJS%20Vietnam%20TAB%20Food-7.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20Vietnamese%20Dishes-12.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/1016%20AJS%20Vietnam%20TAB%20Hue-19.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20Vietnamese%20Dishes-5.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20Vietnamese%20Dishes-6.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20Vietnamese%20Dishes.jpg",
                  "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20Vietnamese%20Dishes-3.jpg",
                  "https://assets.epicurious.com/photos/57978b27c9298e54495917d5/6:4/w_620%2Ch_413/black-bean-and-vegetable-burritos.jpg"]

cuisine_names = ["Vietnamese",
                 "Ramen",
                 "Vegetarian",
                 "Tex Mex",
                 "Ethiopean",
                 "Chinese",
                 "Sandwiches",
                 "Brazilian",
                 "French",
                 "Mexican",
                 "Comfort Food",
                 "Japanese",
                 "American (New)",
                 "Thai",
                 "Bar",
                 "Korean",
                 "Vegan",
                 "Burgers",
                 "Italian",
                 "Healthy",
                 "Asian",
                 "Indian",
                 "Bakery"]

cuisine_names.each do |cuisine|
  Cuisine.create(cuisine_name: cuisine, img_url: cuisine_images.sample)
end

i = 0

open_times = [7, 8, 9, 10, 11, 12]
close_times = [20, 21, 22, 23, 24]
restaurant_prices = [1, 2, 3, 4, 5]
50.times do
  Restaurant.create(
    name: Faker::Restaurant.name,
    cuisine_name: cuisine_names.sample,
    phone: Faker::Number.number(8).to_s,
    address: nyc_addresses[i],
    open_time: open_times.sample,
    close_time: close_times.sample,
    img_url: images[(i % images.length)],
    price: restaurant_prices.sample,
  )
  i += 1
end

restaurant_ids = Restaurant.pluck(:id)
user_ids = User.pluck(:id)
ratings = [1, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5, 5]
prices = [15.00, 15.99, 10.99, 8.99, 11.99, 20.00, 18.99, 12.99, 13.99, 7.99, 6.99, 14.99]

i = 0
50.times do
  Review.create(
    restaurant_id: restaurant_ids[i],
    reviewer_id: user_ids[i],
    body: Faker::Restaurant.review,
    rating: ratings.sample,
  )
  i += 1
end

item_categories = ["appetizer", "entree", "dessert"]
restaurant_ids.each do |rest_id|
  20.times do
    MenuItem.create(
      restaurant_id: rest_id,
      name: Faker::Food.dish,
      description: Faker::Food.description,
      price: prices.sample,
      category: item_categories.sample,
    )
  end

  10.times do
    Review.create(
      restaurant_id: rest_id,
      reviewer_id: user_ids.sample,
      body: Faker::Restaurant.review,
      rating: ratings.sample,
    )
    i += 1
  end
end

# free heroku
# MenuItem.destroy_all
# i = 0

# 20.times do
#   MenuItem.create(
#     restaurant_id: restaurant_ids[i],
#     name: Faker::Food.dish,
#     description: Faker::Food.description,
#     price: prices[i],
#   )
#   i += 1
# end

# 200.times do
#   MenuItem.create(
#     restaurant_id: (1...30).rand
#     category: 'sushi'
#     name: Faker::Food.sushi
#     description: Faker::Food.description
#     price: use rand to get rand price
#   )
# end

# 200.times do
#   MenuItem.create(
#     restaurant_id: (1...30).rand
#     category: 'desserts'
#     name: Faker::Dessert.variety
#     options: [Faker::Dessert.topping, Faker::Dessert.flavor]
#     price: use rand to get rand price
#   )
# end
