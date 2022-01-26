@services.each do |service|
    json.set! service.id do 
        json.extract! service, :id, :title
        json.photoUrl url_for(service.photo)
    end
end