
    json.extract! @product, :id, :title, :description, :service_id, :cost, :ratings, :about 
    json.photoUrl url_for(@product.photo)
    json.reviews @product.reviews 
