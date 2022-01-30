json.array! @products.each do |product|
    json.extract! product, :id, :title, :description, :service_id
    json.photoUrl url_for(product.photo) 
    json.user_id  @session_user.id
end

