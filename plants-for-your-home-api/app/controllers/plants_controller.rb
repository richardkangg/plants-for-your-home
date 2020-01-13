class PlantsController < ApplicationController
    def index
        render json: { status: 200, songs: Plant.all }
    end

    def show
        plant = Plant.find(params[:id])
        render json: { status: 200, plant: plant }
    end

    def update
        update_plant = Plant.update(params[:id])
        render json: { status: 200, book: update_plant }
    end

    def destroy
        destroy_plant = Plant.destroy(params[:id])
        render json: { status: 200, book: destroy_plant }
    end

end