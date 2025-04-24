class Api::ConversationsController < ApplicationController
  before_action :set_users, only: :create

  def index
    conversations = Conversation.where("sender_id = ? OR receiver_id = ?", params[:user_id], params[:user_id])
    render json: conversations, include: :messages
  end

  def create
    conversation = Conversation.find_or_create_by(sender: @sender, receiver: @receiver)
    render json: conversation, status: :created
  end

  private

  def set_users
    @sender = User.find(params[:sender_id])
    @receiver = User.find(params[:receiver_id])
  end
end
