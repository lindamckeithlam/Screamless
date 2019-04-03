
json.extract! restaurant, :id, :name, :phone, :address, :cuisine_name


json.reviews do 
    
    restaurant.reviews.each do |review|
        json.set! review.id do 
         json.extract! review, :id, :body, :reviewer_id, :rating
         json.extract! review.user, :first_name
        end 
    end 

end 
json.menu_items do 
    restaurant.menu_items.each do |item|
        json.set! item.id do 
        json.extract! item, :name, :price, :description, :restaurant_id
        end 
    end 
end 