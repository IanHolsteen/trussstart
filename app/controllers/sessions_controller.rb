class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    skip_before_action :verify_authenticity_token, only: [:destroy]

  def destroy
    session.delete(:user_id)
    head :no_content
  end

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id]= user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def csrf_token
        render json: { csrfToken: form_authenticity_token }
    end

    # def create
    #     auth = request.env["omniauth.auth"]
    #     # Look up or create the user based on the Google UID
    #     user = User.find_or_create_by(provider: auth.provider, uid: auth.uid) do |u|
    #       u.email = auth.info.email
    #       u.name = auth.info.name
    #       u.avatar_url = auth.info.image
    #     end
    #     session[:user_id] = user.id
    #     redirect_to dashboard_path, notice: "Logged in successfully with Google!"
    #   end
    
    #   def failure
    #     redirect_to root_path, alert: "Authentication failed!"
    #   end

end