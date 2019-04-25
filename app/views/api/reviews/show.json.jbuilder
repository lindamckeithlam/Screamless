
    json.extract! @review, :id, :restaurant_id, :reviewer_id, :body, :rating
    json.user do 
    json.extract! @user, :first_name
    end