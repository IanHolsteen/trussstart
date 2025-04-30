class Api::CartsController < ApplicationController

    before_action :find_carts, only: [:create, :show]

    skip_before_action :authorize

    def index
        render json: Cart.all
    end

    def show
        render json: @carts.orders
    end

    def create
        carts = Cart.create!(user_id: session[:user_id])
        render json: carts, status: :created
    end

    private

    def find_carts
        @carts = User.find(params[:id]).carts.last
    end

end
