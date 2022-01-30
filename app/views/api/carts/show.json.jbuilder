
    json.extract! @cart_item, :user_id 
    json.extract! @product, :id, :title, :description, :service_id 
    json.photoUrl url_for(@product.photo)