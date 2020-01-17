class UsersController < ApplicationController
    def index
        render json: { status: 200, users: User.all }
    end

    def show
        user = User.find(params[:id])
        user_plants = Plant.where(user_id: user.id)
        render json: { status: 200, user: user, plants: user_plants }
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user, status:201, location: @user
        else
            render json: @user.errors
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: { status: 200, user: user }
    end

    def user_params
        params.require(:user).permit(:name)
    end

    def destroy
        destroy_user = User.destroy(params[:id])
        render json: { status: 200, user: destroy_user }
    end

end