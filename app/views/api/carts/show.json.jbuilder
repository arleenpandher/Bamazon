
    json.extract! @cart_item, :user_id, :quantity 
    json.extract! @product, :id, :title, :description, :service_id 
    json.photoUrl url_for(@product.photo)