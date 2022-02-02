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

product1 = Product.create(title: "Harry Potter", description: "Flying lessons with the OG", service_id: 4, cost: 99.99)
product1.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/harry_potter.png"), filename:"harry_potter.png")

product2 = Product.create(title: "Bellatrix Lestrange", description: "Powerful and smart might kill you though", service_id: 4, cost: 2.99)
product2.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Bellatrix_Lestrange.png"), filename:"Bellatrix_Lestrange.png")

product3 = Product.create(title: "Draco Malfoy", description: "Known enemy of Buckbeak, you might get killed", service_id: 4, cost: 8.99)
product3.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/draco_malfoy.png"), filename:"draco_malfoy.png")

product4 = Product.create(title: "Molly Weasley", description: "Might be able to help you fly, but will definitely feed you", service_id: 4, cost: 24.99)
product4.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/molly_weasley.png"), filename:"molly_weasley.png")

product5 = Product.create(title: "Severus Snape", description: "He will teach you but be prepared for his remarks", service_id: 4, cost: 59.99)
product5.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/severus_snape.png"), filename:"severus_snape.png")

product6 = Product.create(title: "Luna Lovegood", description: "She is very good with magical creatures but may get distracted", service_id: 4, cost: 79.99)
product6.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/luna_lovegood.png"), filename:"luna_lovegood.png")

product7 = Product.create(title: "Hermonie Granger", description: "She is an excellent teacher but be prepared she is strict", service_id: 4, cost: 99.98)
product7.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/hermonie_granger.png"), filename:"hermonie_granger.png")

product8 = Product.create(title: "Wormtail", description: "150% chance of betrayal is forecasted, good luck!", service_id: 4, cost: 0.01)
product8.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/wormtail.PNG"), filename:"wormtail.PNG")

service5 = Service.create(title: "demogorgon pest control")
service5.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/demogorgon.png"), filename:"demogorgon.png")

service6 = Service.create(title: "save the galaxy")
service6.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/galaxy.png"), filename:"galaxy.png")

service7 = Service.create(title: "volunteer as tribute")
service7.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/mockingjay.png"), filename:"mockingjay.png")

service8 = Service.create(title: "marble game partner")
service8.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/marbles.png"), filename:"marbles.png")

service9 = Service.create(title: "save the crabby patty formula")
service9.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/formula.png"), filename:"formula.png")