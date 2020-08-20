@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :name, :spot_type, :park, :host_id, :lat, :lng, :price_per_night
  end
end