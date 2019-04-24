json.partial! "api/orders/order", order: @order

json.extract! @restaurant, :address, :formatted_phone
json.user do 
    json.extract! @user, :address, :formatted_phone, :first_name
end 

