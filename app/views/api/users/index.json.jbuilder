@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :title, :body, :product_id, :ratings, :user_id
    end 
end 