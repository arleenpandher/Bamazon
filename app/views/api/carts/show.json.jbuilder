
    json.extract! @cart_item, :user_id, :quantity
    json.cart_list_id @cart_item.id
    json.extract! @product, :title, :description, :service_id 
    json.photoUrl url_for(@product.photo)