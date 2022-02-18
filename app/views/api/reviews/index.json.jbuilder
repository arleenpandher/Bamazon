@product_reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :body, :product_id, :ratings, :user_id, :created_at
        json.user review.author.name 
    end
end

