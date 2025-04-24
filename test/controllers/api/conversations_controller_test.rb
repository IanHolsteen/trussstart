require "test_helper"

class Api::ConversationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_conversations_index_url
    assert_response :success
  end

  test "should get create" do
    get api_conversations_create_url
    assert_response :success
  end
end
