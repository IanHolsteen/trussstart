class Api::MessagesController < ApplicationController
  before_action :set_conversation

  def index
    messages = @conversation.messages.order(created_at: :asc)
    render json: messages
  end

  def create
    message = @conversation.messages.new(message_params)
    message.user = User.find(params[:user_id])

    if message.save
      render json: message, status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_conversation
    @conversation = Conversation.find(params[:conversation_id])
  end

  def message_params
    params.require(:message).permit(:content)
  end
end
