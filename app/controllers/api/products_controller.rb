class Api::ProductsController < ApplicationController

    # def index 
    #     @products = Service.where(service_id: params[:service_id]) 
    #     render :index 
    # end

    def index 
        @products = Service.find_by(id: params[:service_id]).products 
        render :index 
    end


    def show 
        @product = Product.find(params[:id])
        render :show 
    end

    def update 
        @product = Product.find(params[:id])
        @product.update(product_params)
        render :show
    end

    private
    def product_params 
        params.require(:product).permit(:ratings)
    end
end
