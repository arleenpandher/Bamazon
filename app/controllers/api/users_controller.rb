class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            render :show
        else 
            render json: ['Password must be longer than 6 characters!'], status: 401 
            
        end
    end

    




    private 
    def user_params 
        params.require(:user).permit(:username, :password, :name)
    end

end
