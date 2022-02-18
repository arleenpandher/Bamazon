@transactions.each do |transaction|
    json.set! transaction.id do 
        json.extract! transaction, :id, :user_id, :product_id, :quantity, :created_at
        product = transaction.product 
        json.extract! product, :title, :description, :cost, :ratings
        json.service product.service.title
        json.photoUrl url_for(product.photo)
    end
end 