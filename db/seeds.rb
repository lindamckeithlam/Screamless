# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require "faker"

# User.destroy_all
# User.create({
#   first_name: "Demo",
#   last_name: "User",
#   password: "blackbearsarebest",
#   email: "demo@demouser.com",
# })

# User.create({
#   first_name: "Linda",
#   last_name: "Mckeith",
#   password: "starwars",
#   email: "linda@screamless.com",
# })

# User.create({
#   first_name: "Steven",
#   last_name: "D",
#   password: "starwars",
#   email: "steven@screamless.com",
# })

# User.create({
#   first_name: "Kit",
#   last_name: "Harington",
#   password: "youknownothing",
#   email: "jonsno@screamless.com",
# })

# User.create({
#   first_name: "Aria",
#   last_name: "Stark",
#   password: "agirlhasnoname",
#   email: "aria@screamless.com",
# })

# User.create({
#   first_name: "David",
#   last_name: "Dickinson",
#   password: "thatmakesoneofus",
#   email: "david@david.com",
# })

# User.create({
#   first_name: "JJ",
#   last_name: "Yang",
#   password: "helpmesoomi",
#   email: "helpme@robinhood.com",
# })

# User.create({
#   first_name: "Mike",
#   last_name: "Mike",
#   password: "bubbletea",
#   email: "mike@petsy.com",
# })

# User.create({
#   first_name: "Nick",
#   last_name: "Schneider",
#   password: "lasagna",
#   email: "meansiloveyou@italian.com",
# })

# nyc_addresses = ["25 St Marks Pl, New York, NY 10003", "108 E 4th St, New York, NY 10003", "230 5th Ave, New York, NY 10001",
#                  "18 9th Ave, New York, NY 10014", "27 W 24th St, New York, NY 10010", "205 W 29th St, New York, NY 10001", "286 8th Ave, New York, NY 10001",
#                  "335 8th Ave, New York, NY 10001", "17 W 32nd St, New York, NY 10001", "88 Madison Ave, New York, NY 10016",
#                  "200 5th Ave, New York, NY 10010", "172 7th Ave, New York, NY 10011", "232 8th Ave, New York, NY 10011",
#                  "172 7th Ave #3, New York, NY 10011", "202 8th Ave, New York, NY 10011", "247 W 30th St, New York, NY 10001", "148 W 24th St, New York, NY 10011",
#                  "138 W 29th St, New York, NY 10001", "343 7th Ave, New York, NY 10001", "330 7th Ave, New York, NY 10001",
#                  "1178 Broadway, New York, NY 10001", "352 7th Ave, New York, NY 10001", "140 W 30th St, New York, NY 10001", "342 7th Ave, New York, NY 10001",
#                  "283 7th Ave, New York, NY 10001", "162 E 33rd St, New York, NY 10016", "548 3rd Ave, New York, NY 10016", "42 E 20th St, New York, NY 10003", "15 Irving Pl, New York, NY 10003",
#                  "622 3rd Ave, New York, NY 10017", "210 E 46th St, New York, NY 10017", "1114 6th Ave, New York, NY 10036", "248 E 52nd St, New York, NY 10022",
#                  "302 E 49th St, New York, NY 10017", "127 E 47th St, New York, NY 10017", "158 E 48th St, New York, NY 10017", "217 E 49th St, New York, NY 10017", "712 3rd Ave, New York, NY 10017",
#                  "245 Park Ave, New York, NY 10167", "200 Park Ave, New York, NY 10166", "551 5th Ave, New York, NY 10017", "201 Park Ave, New York, NY 10166", "89 E 42nd St, New York, NY 10017", "90, 5409, E 42nd St, New York, NY 10017", "555 5th Ave, New York, NY 10017",
#                  "301 Park Ave, New York, NY 10022", "45 E 45th St, New York, NY 10017", "230 Park Ave, New York, NY 10017", "70 Vanderbilt Ave, New York, NY 10017",
#                  "E 47th St & Park Ave, New York, NY 10017", "101 E 47th St, New York, NY 10017"]

# Restaurant.destroy_all
# i = 0
# 50.times do
#   Restaurant.create(
#     name: Faker::Restaurant.name,
#     cuisine_name: Faker::Restaurant.type,
#     phone: Faker::Number.number(8).to_s,
#     address: nyc_addresses[i],
#     open_time: "11:00AM",
#     close_time: "11:00PM",
#   )
#   i += 1
# end

# Review.destroy_all
restaurant_ids = Restaurant.pluck(:id)
user_ids = User.pluck(:id)
cuisines = Restaurant.pluck(:cuisine_name).uniq
ratings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
prices = [15.00, 15.99, 10.99, 8.99, 11.99, 20.00, 18.99, 12.99, 13.99, 7.99, 6.99, 14.99]
i = 0
50.times do
  Review.create(
    restaurant_id: restaurant_ids[i],
    reviewer_id: user_ids[i],
    body: Faker::Restaurant.review,
    rating: ratings[i],
  )
  i += 1
end

i = 0
2000.times do
  MenuItem.create(
    restaurant_id: restaurant_ids[i],
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: prices[i],
  )
  i += 1
end

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
