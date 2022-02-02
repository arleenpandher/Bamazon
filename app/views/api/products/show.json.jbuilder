
    json.extract! @product, :id, :title, :description, :service_id, :cost  
    json.photoUrl url_for(@product.photo)
    json.reviews @product.reviews 
