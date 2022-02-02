@transactions.each do |transaction|
    json.set! transaction.id do 
        json.extract! transaction, :id, :user_id, :product_id, :quantity
        product = transaction.product 
        json.extract! product, :title, :description, :cost
        json.photoUrl url_for(product.photo)
    end
end 