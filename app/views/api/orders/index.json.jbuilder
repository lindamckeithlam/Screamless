
@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.review_count restaurant.review_count
        json.rating restaurant.rating
        json.partial! "api/restaurants/restaurant", restaurant: restaurant
    end 
end 