@cuisines.each do |cuisine|
    json.set! cuisine.id do 
        json.extract! cuisine, :img_url, :cuisine_name
    end 
end 