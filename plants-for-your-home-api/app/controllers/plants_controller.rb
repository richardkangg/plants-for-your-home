class PlantsController < ApplicationController
    def index
        render json: { status: 200, plants: Plant.all }
    end

    def show
        plant = Plant.find(params[:id])
        render json: { status: 200, plant: plant }
    end

    def create
        @plant = Plant.new(plant_params)
        if @plant.save
            render json: @plant, status: 201, location: @plant
        else
            render json: @plant.errors
        end
    end

    def update
        plant = Plant.find(params[:id])
        plant.update(plant_params)
        render json: { status: 200, plant: plant }
    end

    def plant_params
        params.require(:plant).permit(:stage, :kind, :image, :user_id)
    end

    def destroy
        destroy_plant = Plant.destroy(params[:id])
        render json: { status: 200, plant: destroy_plant }
    end

end