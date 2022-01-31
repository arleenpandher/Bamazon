class Api::ReviewsController < ApplicationController

    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id 
        if @review.save 
           render :show   
        end
    end

    def index 
        @product_reviews = Product.find_by(id: params[:product_id]).reviews
        render :index  
    end

    def destroy 
        @review = Review.find_by(id: params[:id])
        @review.delete
        render :show
    end


    private 
    def review_params 
        params.require(:review).permit(:product_id, :title, :body, :ratings)
    end

end
