# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Service.destroy_all

service1 = Service.create(title: "save the earth")
service1.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/earth.png"), filename:"earth.png")

service2 = Service.create(title: "save the universe")
service2.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/universe.png"), filename:"universe.png")

service3 = Service.create(title: "balance your diet")
service3.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/diet.png"), filename:"diet.png")

service4 = Service.create(title: "flying lessons")
service4.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/buckbeek.png"), filename:"buckbeek.png")