
@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.review_count restaurant.reviews.length
        json.partial! "api/restaurants/restaurant", restaurant: restaurant
    end 
end 