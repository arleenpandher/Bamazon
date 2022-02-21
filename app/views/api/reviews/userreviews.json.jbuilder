@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :title, :body, :product_id, :ratings, :user_id
        json.name review.product.title
        json.service review.product.service.title
    end 
end 