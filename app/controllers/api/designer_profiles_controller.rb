class Api::DesignerProfilesController < ApplicationController
    def index
        render json: DesignerProfile.all
    end
end
