# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_04_24_133737) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "business_profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "photo"
    t.string "name"
    t.string "location"
    t.string "language"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_business_profiles_on_user_id"
  end

  create_table "carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "total"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "connections", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "connected_user_id", null: false
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["connected_user_id"], name: "index_connections_on_connected_user_id"
    t.index ["user_id"], name: "index_connections_on_user_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.bigint "sender_id", null: false
    t.bigint "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_conversations_on_receiver_id"
    t.index ["sender_id"], name: "index_conversations_on_sender_id"
  end

  create_table "designer_profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "location"
    t.string "language"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_range"
    t.boolean "lgbtq_owned"
    t.boolean "minority_owned"
    t.boolean "fluent_in_spanish"
    t.integer "star_rating"
    t.index ["user_id"], name: "index_designer_profiles_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "conversation_id", null: false
    t.bigint "user_id", null: false
    t.text "content", null: false
    t.boolean "read", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "mood_boards", force: :cascade do |t|
    t.bigint "designer_profile_id", null: false
    t.bigint "business_profile_id", null: false
    t.bigint "seeker_profile_id", null: false
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_profile_id"], name: "index_mood_boards_on_business_profile_id"
    t.index ["designer_profile_id"], name: "index_mood_boards_on_designer_profile_id"
    t.index ["seeker_profile_id"], name: "index_mood_boards_on_seeker_profile_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.bigint "designer_profile_id"
    t.bigint "business_profile_id"
    t.bigint "seeker_profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_profile_id"], name: "index_portfolios_on_business_profile_id"
    t.index ["designer_profile_id"], name: "index_portfolios_on_designer_profile_id"
    t.index ["seeker_profile_id"], name: "index_portfolios_on_seeker_profile_id"
  end

  create_table "project_photos", force: :cascade do |t|
    t.bigint "project_id", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_photos_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.bigint "portfolio_id", null: false
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_projects_on_portfolio_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "reviewer_id", null: false
    t.bigint "reviewee_id", null: false
    t.integer "rating"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reviewee_id"], name: "index_reviews_on_reviewee_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "seeker_profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "photo"
    t.string "name"
    t.string "location"
    t.string "language"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_seeker_profiles_on_user_id"
  end

  create_table "user_roles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "role_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_roles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "designer_profile_id"
    t.integer "business_profile_id"
    t.integer "seeker_profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "business_profiles", "users"
  add_foreign_key "carts", "users"
  add_foreign_key "connections", "users"
  add_foreign_key "connections", "users", column: "connected_user_id"
  add_foreign_key "conversations", "users", column: "receiver_id"
  add_foreign_key "conversations", "users", column: "sender_id"
  add_foreign_key "designer_profiles", "users"
  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
  add_foreign_key "mood_boards", "business_profiles"
  add_foreign_key "mood_boards", "designer_profiles"
  add_foreign_key "mood_boards", "seeker_profiles"
  add_foreign_key "portfolios", "business_profiles"
  add_foreign_key "portfolios", "designer_profiles"
  add_foreign_key "portfolios", "seeker_profiles"
  add_foreign_key "project_photos", "projects"
  add_foreign_key "projects", "portfolios"
  add_foreign_key "reviews", "users", column: "reviewee_id"
  add_foreign_key "reviews", "users", column: "reviewer_id"
  add_foreign_key "seeker_profiles", "users"
  add_foreign_key "user_roles", "users"
end
