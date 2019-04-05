
json.extract! restaurant, :id, :name, :phone, :address, :cuisine_name, :open_time, :close_time
if restaurant.photo.attached? 
    json.image_url restaurant.photo.service_url
end 


