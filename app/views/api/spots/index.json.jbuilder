@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :name, :spot_type, :park, :host_id, :lat, :lng, :price_per_night, :guests_per_site
    json.spotProfilePic url_for(spot.spot_photos[0])
  end
end