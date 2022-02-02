json.extract! @transaction, :id, :user_id, :product_id, :quantity 
product = @transaction.product
json.extract! product, :title, :description, :cost
json.service_id product.service.id  
json.photoUrl url_for(product.photo)
