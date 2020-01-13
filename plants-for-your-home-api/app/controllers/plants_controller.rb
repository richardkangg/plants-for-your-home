class PlantsController < ApplicationController
    def index
        render json: { status: 200, songs: Plant.all }
    end

    def show
        plant = Plant.find(params[:id])
        render json: { status: 200, plant: plant }
      end
end