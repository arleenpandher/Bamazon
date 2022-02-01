class Api::CartsController < ApplicationController

    def create
        @cart_item = Cart.new(cart_params)
        @cart_item.user_id = current_user.id
        if @cart_item.save
            @product = @cart_item.product 
            render :show
        end
    end

    def index
        @session_user = current_user
        @cart_items = current_user.cart_items
        @products = current_user.cart_products 
        render :index
    end

    def update 
        # debugger
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.update(cart_params)
        @product = @cart_item.product 
        render :show
    end

    def destroy
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.delete  
    end


    private 
    def cart_params 
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end

end
