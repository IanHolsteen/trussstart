class ApplicationController < ActionController::Base
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    include Rails.application.routes.url_helpers
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    before_action :guest
    before_action :authorize
    
    protect_from_forgery with: :exception
    before_action :set_csrf_token_cookie
  
    private
  
    def guest
      return if session[:user_id]
      @guest = User.new(:email => "Guest")
      @guest.save(validate: false)
      session[:user_id] = @guest.id
      carts = @guest.carts.create!
    end
  
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      render json: {errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
  
    def not_found_response(exception)
      render json: { error: "#{exception.model} not found" }, status: :not_found
    end
  
    def invalid_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def set_csrf_token_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
