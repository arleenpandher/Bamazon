# json.array! @products.each do |product|
#     json.extract! product, :id, :title, :description, :service_id
#     json.photoUrl url_for(product.photo) 
#     json.user_id  @session_user.id
# end

json.array! @cart_items.each do |cart_list_item|
    json.extract! cart_list_item.product, :id, :title, :description, :service_id, :cost, :ratings, :about
    product = cart_list_item.product
    json.photoUrl url_for(product.photo)
    json.user_id @session_user.id 
    json.cart_id cart_list_item.id
    json.extract! cart_list_item, :quantity   
end

