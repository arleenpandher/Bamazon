
json.array! @products.each do |product|
    json.extract! product, :id
    json.user_id  @session_user.id
end

