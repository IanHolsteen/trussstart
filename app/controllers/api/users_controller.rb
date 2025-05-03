class Api::UsersController < ApplicationController
    skip_before_action :guest, only: [:create, :show, :index, :update, :destroy]
    skip_before_action :authorize, only: [:create, :guest]
    before_action :find_user, only: [:update, :destroy]

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            @guest = User.new(email: "Guest")
            @guest.save(validate: false)
            session[:user_id] = @guest.id
            carts = @guest.carts.create!
            render json: @guest
        end
    end

    def guest
        return if session[:user_id]
      
        @guest = User.create!(
          name: "Guest",
          email: "guest_#{SecureRandom.hex(4)}@example.com",
          password: SecureRandom.hex(8),
          password_confirmation: SecureRandom.hex(8),
          validate: false
        )
      
        session[:user_id] = @guest.id
        @guest.carts.create!
      end
      
      def create
        user = User.create!(user_params)
      
        # Transfer carts from most recent guest user
        guest_user = User.where("email LIKE ?", "guest_%@example.com").order(created_at: :desc).first
        if guest_user
          guest_user.carts.update_all(user_id: user.id)
          guest_user.destroy
        end
      
        # Clean up any remaining guest users (optional)
        User.where("email LIKE ?", "guest_%@example.com").where.not(id: user.id).destroy_all
      
        session[:user_id] = user.id
        render json: user, status: :created
      end
      


    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :interested_in_building_profile)
    end
end
