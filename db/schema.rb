# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_21_031802) do

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
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "spots", force: :cascade do |t|
    t.string "name", null: false
    t.integer "host_id", null: false
    t.text "description", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "park", null: false
    t.string "spot_type", null: false
    t.float "price_per_night", null: false
    t.integer "minimum_nights", null: false
    t.integer "maximum_occupancy", null: false
    t.string "nearby_attractions", null: false
    t.boolean "bring_your_own_tents", null: false
    t.integer "sites", null: false
    t.integer "guests_per_site", null: false
    t.boolean "park_at_listing", null: false
    t.boolean "ada_access", null: false
    t.boolean "toilet_available", null: false
    t.boolean "campfires", null: false
    t.boolean "picnic_table_available", null: false
    t.boolean "potable_water", null: false
    t.boolean "kitchen", null: false
    t.boolean "showers", null: false
    t.boolean "wifi", null: false
    t.boolean "bins_available", null: false
    t.boolean "laundry", null: false
    t.boolean "electrical_hookup", null: false
    t.boolean "water_hookup", null: false
    t.boolean "generator_allowed", null: false
    t.boolean "sewage_hookup", null: false
    t.boolean "tv_hookup", null: false
    t.boolean "pull_in_site", null: false
    t.string "surface_type"
    t.integer "max_length"
    t.string "surface_levelness"
    t.boolean "slideouts", null: false
    t.string "lodging_type"
    t.boolean "biking", null: false
    t.boolean "hiking", null: false
    t.boolean "boating", null: false
    t.boolean "fishing", null: false
    t.boolean "paddling", null: false
    t.boolean "swimming", null: false
    t.boolean "snow_sports", null: false
    t.boolean "wildlife_watching", null: false
    t.boolean "climbing", null: false
    t.boolean "horseback_riding", null: false
    t.boolean "off_roading", null: false
    t.boolean "mountainous", null: false
    t.boolean "forest", null: false
    t.boolean "desert", null: false
    t.string "weather"
    t.string "elevation"
    t.string "distance"
    t.string "check_in_details", null: false
    t.string "check_out_details", null: false
    t.string "cancellation_policy", null: false
    t.string "on_arrival", null: false
    t.string "booking_acceptance", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "coastal", null: false
    t.boolean "pets_allowed", null: false
    t.index ["host_id"], name: "index_spots_on_host_id"
    t.index ["name"], name: "index_spots_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
