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
end
