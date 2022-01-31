
    json.extract! @product, :id, :title, :description, :service_id 
    json.photoUrl url_for(@product.photo)
    json.reviews @product.reviews 
