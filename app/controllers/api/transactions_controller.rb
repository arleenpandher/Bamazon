class Api::TransactionsController < ApplicationController

    def create 
        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id 
        if @transaction.save 
            render :show 
        end
    end

    def index 
        @transactions = current_user.transactions
        render :index  
    end

    private 
    def transaction_params
        params.require(:transaction).permit(:product_id, :quantity)
    end
end
