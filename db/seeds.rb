# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demouser = User.create(name: "Batman", username: "The OG Hero", password:"hello123")

Service.destroy_all

service1 = Service.create(title: "save the earth")
service1.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/earth.png"), filename:"earth.png")

product9 = Product.create(title: "Spider-Man", description: "Have no fear! Spidey is here!", service_id: 1, cost: 79.99, ratings: 0,
about: "A young, brave individual with spider-like traits. He struggles with emotions toward loved ones, which occasionally gets in the way of his hero duties. He may also be stubborn at times, which is a negative characteristic.  However, he is one that the people can always trust. He will save the earth.")
product9.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/spiderman.png"), filename:"spiderman.png")

product10 = Product.create(title: "Ant Man", description: "The first thing he will do ..call the Avengers", service_id: 1, cost: 59.99, ratings: 0,
about: "A small, or large individual that can shrink or grow depending on the situation. He is heavily reliant on his gadget which keeps him in control of his powers. He can stop a meteor from falling and unlock a keyhole to save the cat in the same hour. When it comes to saving the Earth, Ant Man is your guy.")
product10.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/antman.png"), filename:"antman.png")

product11 = Product.create(title: "Hulk", description: "He's knows, he's sorry that he gets so angry", service_id: 1, cost: 49.99, ratings: 0,
about: "He can turn into a very strong individual who is capable of doing the heavy lifting. And he can also be very clever at times which is a perfect mix. Although Hulk is a great hero he doesn’t always show up, which is a downside when you need him to save the Earth but when he does show up, nobody saves the Earth quite like him.")
product11.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/hulk.png"), filename:"hulk.png")

product12 = Product.create(title: "Captain America", description: "The very first Avenger of them", service_id: 1, cost: 99.99, ratings: 0,
about: "He is a very brave soldier, ready to protect anyone. He is worthy of all the praise that he gets due to his services. He is honest, giving and super strong.  No one is as sincere as this hero. When it comes to saving the Earth, no one cares more than this hero.")
product12.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/captainamerica.png"), filename:"captainamerica.png")

product13 = Product.create(title: "Captain Marvel", description: "She doesn’t fight she ends wars", service_id: 1, cost: 49.99, ratings: 0,
about: "She has a lot of power, enough to lift multiple buildings. She can fly, time travel and absorb energy.  But behind that power lies arrogance. This can cloud her heroism at times because she believes in her supremacy.  However, her strength and abilities make her a great hero to save the Earth.")
product13.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/captainmarvel.png"), filename:"captainmarvel.png")

product14 = Product.create(title: "Nick Fury", description: "Last time he trusted someone he lost an eye", service_id: 1, cost: 59.99, ratings: 0,
about: "He is the most dangerous man on the planet. He will use resources to find anybody no matter where they are. He has all the connections in the world. He knows everyone’s every move. He will protect and aid civilians, but he will also kill if necessary.  This hero will do what it takes to save the Earth.")
product14.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/nickfury.png"), filename:"nickfury.png")

product15 = Product.create(title: "Deadpool", description: "He's the bad guy who messes the worse guys", service_id: 1, cost: 39.99, ratings: 0,
about: "You will not know if he is on your side or not. He is very dangerous and will kill to reach his desires. If you are successful in convincing him, consider your mission successful, but if not, you will be on the run for the rest of your life. He will hunt you down. He is indestructible, so there is no stopping him.  If he wants to save the Earth no one can stop him.")
product15.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/deadpool.png"), filename:"deadpool.png")

product16 = Product.create(title: "Wolverine", description: "He's coming for blood, no law, no code of conduct", service_id: 1, cost: 29.99, ratings: 0,
about: "A very angry individual who may be out of his mind. It might be hard to convince him to help, so beware. He is a bigger threat than most of his enemies so look out. There is a 15% chance that he will help you, and 85% chance he might kill you.  However, if you convince him to save the Earth his strength and abilities will serve you well.")
product16.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/wolverine.png"), filename:"wolverine.png")

service2 = Service.create(title: "save the universe")
service2.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/universe.png"), filename:"universe.png")

product17 = Product.create(title: "Iron Man", description: "A true hero that would die for the universe", service_id: 2, cost: 99.99, ratings: 0,
about: "A billionaire inventor and superhero who is willing to die for the universe. He may be quite the show-off but that does not get in his way of being a great superhero. Although he may seem like the “perfect man”, aligning yourself with Tony aka Iron Man, will result in dangers from his horde of enemies. He is able to repair any suit damages as well as creating environmental suits in just a few seconds. He can create gadgets wherever he goes.  When it comes to saving the universe, Iron Man won’t disappoint you.")
product17.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/ironman.png"), filename:"ironman.png")

product18 = Product.create(title: "Scarlet Witch", description: "She can moves things with her mind", service_id: 2, cost: 79.99, ratings: 0,
about: "Wanda is one very powerful individual with immense scarlet power. Her powers may overpower her emotions at times, so beware. She is very smart and has a lot of allies. Occasionally, she may lose control of her mind and powers, which may be dangerous in situations. She might have caused a whole mass extinction.  This is one powerful superhero who has all the skills necessary to save the universe.")
product18.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/wanda.png"), filename:"wanda.png")

product19 = Product.create(title: "Thor", description: "The son of Odin has no plans to die today", service_id: 2, cost: 89.99, ratings: 0,
about: "Thor is a very strong and brave individual who is willing to burn and die for the universe. Although he tends to be a great superhero, his arrogance may cloud his mind at times. He also acts a lot on impulse a lot. However, he is a good man at heart and will do whatever it takes to save the universe.")
product19.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/thor.png"), filename:"thor.png")

product20 = Product.create(title: "The Flash", description: "Save the universe in lightening speed", service_id: 2, cost: 59.99, ratings: 0,
about: "A super fast individual with immense powers. He will never kill and is but will die for the universe. He always puts his friends and family before himself. His empathy sometimes gets in the way of his ability to get the job done; however, he is a good person.  He is truly a hero that can save the universe in lightening speed.")
product20.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/flash.png"), filename:"flash.png")

product21 = Product.create(title: "Super Man", description: "A beacon of hope in the darkest times", service_id: 2, cost: 49.99, ratings: 0,
about: "Superman is an invincible, caring superhero who is willing to give up his powers for the universe. His rivalry against Batman may cloud his mind at times. Occasionally, he may struggle with deciding to be good or evil, because being good is tiring. He believes that he carries all the weight of struggles, which may be dangerous if he shuts everyone off.  However, his strength and dedication make a true hero, the perfect hero to save the universe.")
product21.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/superman.png"), filename:"superman.png")

product22 = Product.create(title: "Dr. Strange", description: "In this vast multiverse he is Mr. Strange", service_id: 2, cost: 89.99, ratings: 0,
about: "An immensely smart hero who has learned a universal magic. He uses a lot of gadgets which guides his powers. Although he depends heavily on his gadgets to perform his magic, he is very powerful. He picks up on lessons insanely fast which is very useful.  He won’t go down easily, especially when it comes to the universe.")
product22.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/drstrange.png"), filename:"drstrange.png")

product23 = Product.create(title: "Star Lord", description: "Listen to him, he always goes right", service_id: 2, cost: 89.99, ratings: 0,
about: "He is an arrogant individual with a load of interdimensional gadgets. He has a large ego and not a day has gone by when he hasn’t lost his temper. He is also very funny and may also lighten the mood. He has any skill when the time come necessary, but he is also very over sensitive, which is very hard for him at times.")
product23.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/starlord.png"), filename:"starlord.png")

product24 = Product.create(title: "Black Panther", description: "Don’t challenge this King, he's got his people", service_id: 2, cost: 99.99, ratings: 0,
about: "He is a very brave individual who uses gadgets very effectively. He uses them a whole lot, but he does not solely rely on them. He has immense strength and number of other skills which make a formidable opponent.  He cares deeply for his kingdom and would do anything for the universe.")
product24.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/blackpanther.png"), filename:"blackpanther.png")

service3 = Service.create(title: "balance your diet")
service3.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/diet.png"), filename:"diet.png")

product25 = Product.create(title: "Yoda", description: "Do or do not there is no try for him", service_id: 3, cost: 99.99, ratings: 0,
about: "Just like he masters the force, he masters the diet force as well. He eats very balanced diet and is very healthy. He will give you lessons that will only benefit you. His eating size is incomparable to anyone due to his petite size, but he can still provide some great lessons related to the force or diets.")
product25.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/yoda.png"), filename:"yoda.png")

product26 = Product.create(title: "Han Solo", description: "Do you love him? Well he loves himself too", service_id: 3, cost: 89.99, ratings: 0,
about: "He is one of a few who will provide a good diet for you. He may eat more meat than anything else, but it is very good protein. He likes physical activity and wants to remain fit. He may be closed off at first, but when it comes to balancing your diet he is the man.")
product26.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/hansolo.png"), filename:"hansolo.png")

product27 = Product.create(title: "Jabba the Hutt", description: "We will soon learn to he appreciate him", service_id: 3, cost: 19.99, ratings: 0,
about: "He loves everything. He will eat veggies. He will eat meat. He has a lot of everything, so he is balanced in that way. A fair warning that his portions are inhumane. He might have eaten a human, who knows. His favorite snack is a Klatooine paddy frog. Gross! If you want a whole buffet at your service, be his guest. If you plan to get fit, try someone else.")
product27.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/jabba.png"), filename:"jabba.png")

product28 = Product.create(title: "Chewbacca", description: "No hope is greater than that of the Wookiees", service_id: 3, cost: 89.99, ratings: 0,
about: "Surprisingly, Chewbacca eats like any other human would, he eats a variety of foods. He keeps a healthy diet, remaining tactical and fed at the same time. The only issue is that he can’t exactly talk to you. So he may not be able to advise you but you can always watch and learn.")
product28.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/chewbacca.png"), filename:"chewbacca.png")

product29 = Product.create(title: "Darth Vader", description: "Welcome to the dark side, he has cookies", service_id: 3, cost: 39.99, ratings: 0,
about: "A very closed off man with a subtle diet. He loves to eat stormtrooper waffles and lightsaber chicken sticks. He hates veggies and will never touch a glass of milk. He gets his exercise by conquering space so that is already handled. He never gives food to anyone.  He is also not the nicest, so he probably won’t help much when it comes to your diet")
product29.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/darthvader.png"), filename:"darthvader.png")

product30 = Product.create(title: "Palpatine", description: "He wants power, unlimited power", service_id: 3, cost: 19.99, ratings: 0,
about: "This is your stop for all the wheat in the world. He eats bagels, and banana bread. You will never touch another food group again. It helps you gain more control over the force. He will electrocute you if you even touch his food. He isn’t very balanced but sometimes imbalance is necessary.")
product30.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Palpatine.png"), filename:"Palpatine.png")

product31 = Product.create(title: "Obi Wan Kenobi", description: "Help Obi-Wan Kenobi, he’s our only hope", service_id: 3, cost: 99.99, ratings: 0,
about: "He eats more veggies than anyone else. He does have other foods, but nothing tops his veggies. He loves to stay tactical and ready to fight, and these fruits and vegetables help him keep the form. Rumors say that he may cut his vegetables with his lightsaber.  So if you need to get fit fast Obi Wan Kenobi is your guy.")
product31.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/obiwan.png"), filename:"obiwan.png")

product32 = Product.create(title: "C-3PO", description: "Sometimes, he just don’t understand human behaviour", service_id: 3, cost: 59.99, ratings: 0,
about: "He is a wonderful robot who does not eat himself, but can teach you the ways of balancing your diet. He has no experience of eating, but he can still process healthy eating habits. You may not get examples from him, but you will get a great plan.")
product32.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/c3po.png"), filename:"c3po.png")

service4 = Service.create(title: "flying lessons")
service4.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/buckbeek.png"), filename:"buckbeek.png")

product1 = Product.create(title: "Harry Potter", description: "The boy who lived is an expert when it comes to flying", service_id: 4, cost: 99.99, ratings: 0,
about: "Harry has had experience flying Buckbeak.  The first time he had an opportunity to fly with him was when he was during his third year at Hogwarts.  Buckbeak is familiar with Harry, as a result you won’t have to worry about any hippogriff tantrums.  Harry is also a good teacher, he taught practical defense against the dark arts techniques to his peers when Umbridge had taken control of the entire school. Also a fun fact, Harry saved Buckbeak’s life.")
product1.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/harry_potter.png"), filename:"harry_potter.png")

product2 = Product.create(title: "Bellatrix Lestrange", description: "A powerful wizard who is usually out for blood", service_id: 4, cost: 2.99, ratings: 0,
about: "Bellatrix is a very powerful wizard, who belongs to one of the Sacred Twenty-Eight wizarding families.  Despite his prestigious background Bellatrix is quite infamous for her strong association with Voldemort. To be quite honest, she isn’t very fond of muggles so a lesson with her might be challenging when she is trying to kill you.  Buckbeak is not very fond of people who are aggressive and arrogant like Bellatrix.  If you do pick her, be careful.")
product2.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Bellatrix_Lestrange.png"), filename:"Bellatrix_Lestrange.png")

product3 = Product.create(title: "Draco Malfoy", description: "Buckbeak’s publicly known arch nemesis", service_id: 4, cost: 8.99, ratings: 0,
about: "Draco is a smart wizard; however, he does not have the best relationship with Buckbeak.  During a class third year Draco tried to ride Buckbeak without showing respect, as a result Buckbeak might have scratched his arm.  In retaliation, Draco and his father tried to get Buckbeak executed.  Draco is also not very fond of muggles so expect some snide remarks. He also doesn’t have a lot of experience teaching.")
product3.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/draco_malfoy.png"), filename:"draco_malfoy.png")

product4 = Product.create(title: "Molly Weasley", description: "May help you fly, will feed you for sure", service_id: 4, cost: 24.99, ratings: 0,
about: "Molly is one of the nicest wizards around.  She has raised seven children, so she has a lot of experience working with children.  She is also very sweet and polite as long as are too.  Although Molly does not have a lot of experience working with Buckbeak she is does have the right attitude.  Although your flying progress might be questionable after this lesson, you will definitely leave with a full stomach")
product4.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/molly_weasley.png"), filename:"molly_weasley.png")

product5 = Product.create(title: "Severus Snape", description: "He is not a nice person he is a good one.", service_id: 4, cost: 59.99, ratings: 0, 
about: "Severus has a lot of experience teaching children as he has been a professor at Hogwarts for many years. He doesn’t come across as the nicest person, expect to hear of a lot of criticism.  Despite all his shortcoming, the half-blood price is truly a good person through and through.  He may not have experience flying with Buckbeak, he is an extremely intelligent wizard who can often figure things out quickly.")
product5.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/severus_snape.png"), filename:"severus_snape.png")

product6 = Product.create(title: "Luna Lovegood", description: "Extremely fond of magical creatures", service_id: 4, cost: 79.99, ratings: 0, 
about: "Luna is a certified Magizoologist, she studies magical creatures for a living.  As a result, she won’t have any trouble dealing or working with Buckbeak.  You will likely also learn a lot from her since she is extremely knowledge.  Some people may say she has some eccentric beliefs, but rest assured she always means well.  She has an extremely sincere disposition, which most and Buckbeak would strongly appreciate.")
product6.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/luna_lovegood.png"), filename:"luna_lovegood.png")

product7 = Product.create(title: "Hermonie Granger", description: "A brilliant mind who turns knowledge to power ", service_id: 4, cost: 99.98, ratings: 0, 
about: "Hermione is a gifted wizard who can learn anything she puts her mind.  There really isn’t a thing that Hermione can’t do.  Although she is not fond of flying, when the time requires her to fly, she will.  Hermione has had experience flying with Buckbeak when she saved his life.  As a result, working with Buckbeak will not be a problem.  Hermione expects the best from everyone around her so please do come prepared to your lesson, she expects nothing less than perfect.")
product7.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/hermonie_granger.png"), filename:"hermonie_granger.png")

product8 = Product.create(title: "Wormtail", description: "150% chance of betrayal is forecasted", service_id: 4, cost: 0.01, ratings: 0, 
about: "Wormtail or better known as Peter Pettigrew was one the Marauders.  Although he was never caught it is well known that he betrayed the Potter which eventually led to the demise of Lily and James.  Wormtail is also a known follower of Voldmort.  Working with him is quite a daunting task, you never really know what is going to happen to you, as a result we have a great discount going on at the moment.")
product8.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/wormtail.PNG"), filename:"wormtail.PNG")

service5 = Service.create(title: "demogorgon pest control")
service5.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/demogorgon.png"), filename:"demogorgon.png")

product33 = Product.create(title: "Mike", description: "If your looking for him he has probably left the country", service_id: 5, cost: 89.99, ratings: 0,
about: "He will create well developed plans as the party leader, although he may be stubborn when following through with his plans. He may tend to overreact at times which may disrupt things, but he usually gets out of sticky situations.  So, if you have a minor demogorgon infestation, Mike can handle that job.")
product33.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/mike.png"), filename:"mike.png")

product34 = Product.create(title: "Eleven", description: "She’s not a monster but she can fight ", service_id: 5, cost: 99.99, ratings: 0,
about: "You want mind powers, here she is. She can burn the demogorgon to shreds and knock out the monsters. She does need a cool down period after using her powers, which sometimes gets quite long.  However, if you have a major pest control problem, she is definitely the one to reach out to.")
product34.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/eleven.png"), filename:"eleven.png")

product35 = Product.create(title: "Mind Flayer", description: "If you let him in, you have to let him stay", service_id: 5, cost: 0.01, ratings: 0,
about: "He is the mind of it all, who does not even know his true home. He only cares about his supremacy. It is connected to all the hosts, so if it feels threatened, it may call all the demogorgon for protection. Also, he does not really talk so there is no way to communicate.  If you call the mind flayer you will likely have a bigger problem, then what you had initially. ")
product35.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/mindflayer.png"), filename:"mindflayer.png")

product36 = Product.create(title: "Dustin", description: "He is always on a curiosity voyage", service_id: 5, cost: 89.99, ratings: 0,
about: "The tech mind of it all. He will connect the teams together and help save the world. He will sing for the world, and he will get all the codes you may need. He will call any of his friends and warn them of any threats. If you want a tech genius to destroy your pests, Dustin will get the job done.  ")
product36.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/dustin.png"), filename:"dustin.png")

product37 = Product.create(title: "Steve", description: "He almost died in a secret Russian Base", service_id: 5, cost: 99.99, ratings: 0,
about: "You want the batter, be Steve’s guest. He will beat all the demogorgon in the world, with a bat of course. He will use his bat with nail’s and protect the children. He will die in a Russian base to keep your home demogorgon free. He will act as the lure, the killer, the cleaner all in one. It’s a limited edition package.")
product37.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/steve.png"), filename:"steve.png")

product38 = Product.create(title: "Dr. Brenner", description: "He is evil served with a side of genius ", service_id: 5, cost: 19.99, ratings: 0,
about: "He started this mess. He brought the first demogorgon to the world. He will act nice and helpful, but he just wants to be the most powerful doctor ever. He has kidnapped children. He will exterminate the monsters, but he will bring you back to his lab for testing, pick your poison. ")
product38.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/brenner.png"), filename:"brenner.png")

product39 = Product.create(title: "Erica", description: "Keep saying her name and see what happens", service_id: 5, cost: 49.99, ratings: 0,
about: "You want the truth, presenting Erica. She will make deals with you like a CEO. She will also never not make fun of you. However, if you need her to crawl into air ducts, she is perfect, but only if she gets free ice cream, for life.")
product39.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/erica.png"), filename:"erica.png")

product40 = Product.create(title: "Will", description: "Certified demogorgon metal detector", service_id: 5, cost: 89.99, ratings: 0,
about: "He has been through it all. He has been the victim twice. He ca feel the presence of the beasts. He may not be the strongest, but he knows how to hide. He will surprise you when you least expect it. He is a certified demogorgon metal detector.")
product40.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/will.png"), filename:"will.png")

service6 = Service.create(title: "save the galaxy")
service6.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/galaxy.png"), filename:"galaxy.png")

product41 = Product.create(title: "Green Arrow", description: "He would die to let others live", service_id: 6, cost: 49.99, ratings: 0,
about: "He will assist you with all the gadgets he has. He will give his life up for anyone. He will kill to get information. He does not represent a symbol of his city. He is a vigilante and he will not always stay on the right side.  However, if you can get him on your side, he is a great asset for saving the galaxy ")
product41.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/greenarrow.png"), filename:"greenarrow.png")

product42 = Product.create(title: "Black Lightning", description: "A strong hero who stands out ", service_id: 6, cost: 79.99, ratings: 0,
about: "He will attempt to protect the galaxy, but he likes to teach lessons. He likes to bring the best out of people to try and make them heroes. You might hire him and then become a hero yourself.")
product42.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/blackligtening.png"), filename:"blackligtening.png")

product43 = Product.create(title: "The Atom", description: "Time for atomic action with the orginal atom!", service_id: 6, cost: 59.99, ratings: 0,
about: "He can shrink to the size of an atom and grow infinitely large as required. Although, his power relies on his suit, so if it malfunctions, he might be stuck in a form. He is a really smart engineer as well, so if he can’t be the atom, he will use his brain to save the galaxy")
product43.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/atom.png"), filename:"atom.png")

product44 = Product.create(title: "Supergirl", description: "Superman 2.0 but she won't ever hold back", service_id: 6, cost: 89.99, ratings: 0,
about: "She has so many powers like speed, strength, and flight. Sometimes, having that much power makes her want to be a villain, so it is not certain if she will remain on your side.  But once she is determine, she will do what it takes to save the galaxy.")
product44.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/supergirl.png"), filename:"supergirl.png")

product45 = Product.create(title: "The Flash", description: "Saving the galaxy in lightening speed", service_id: 6, cost: 99.99, ratings: 0,
about: "A super fast individual with immense powers. He will never kill and is but will die for the universe. He always puts his friends and family before himself. His empathy sometimes gets in the way of his ability to get the job done; however, he is a good person.  He is truly a hero that can save the galaxy in lightening speed.")
product45.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/flash.png"), filename:"flash.png")

product46 = Product.create(title: "Green Lantern", description: "Stand back and peep the light show ", service_id: 6, cost: 59.99, ratings: 0,
about: "He can do and make a lot with his ring. He has a lot of powers, but it can do a lot of harm when in the wrong hands. He can make anything but if he loses the ring though, he is just a normal man.  With the ring, green lantern can be one of the best allies when it comes to saving the galaxy.")
product46.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/greenlatern.png"), filename:"greenlatern.png")

product47 = Product.create(title: "Wonder Woman", description: "If you need to end a war you call her", service_id: 6, cost: 89.99, ratings: 0,
about: "She has a lot of resources and powers. Some can say she is the golden woman standard. But these weapons can also fall into the wrong hands. Everything can also malfunction, but if all is good and well you have a hero that can save the galaxy.")
product47.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/wonderwoman.png"), filename:"wonderwoman.png")

product48 = Product.create(title: "Harley Quinn", description: "This is most likely a really bad idea ", service_id: 6, cost: 9.99, ratings: 0,
about: "Expect immediate betrayal. She only cares for herself and the joker. She will let the multiverse collapse; she does not care.  She is someone who loves chaos, so if like her to you want to see the galaxy collapse then go for it.")
product48.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/harleyquinn.png"), filename:"harleyquinn.png")

service7 = Service.create(title: "volunteer as tribute")
service7.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/mockingjay.png"), filename:"mockingjay.png")

product49 = Product.create(title: "Gale Hawthorne", description: "A brave hunter with great skill", service_id: 7, cost: 89.99, ratings: 0,
about: "A very brave hunter who will go to great lengths to survive. He is stubborn, but his bravery usually forms adrenaline which helps him follow through. So if your district needs a winner he would be a great candidate.")
product49.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/gale.png"), filename:"gale.png")

product50 = Product.create(title: "Primrose Everdeen", description: "A young teen with expertise in medicine ", service_id: 7, cost: 39.99, ratings: 0,
about: "She is a child who has a spark of bravery, but it does not manifest in physical strength.  She is used to her sister protecting her, so she might be a little overwhelmed as tribute.")
product50.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/primrose.png"), filename:"primrose.png")

product51 = Product.create(title: "Katniss Everdeen", description: "A two time fearless winner that has no weaknesses", service_id: 7, cost: 99.99, ratings: 0,
about: "She is a very smart hunter, who has won the games twice, so if you need someone who you can put your money on as tribute she is definitely your person.")
product51.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/katniss.png"), filename:"katniss.png")

product52 = Product.create(title: "President Snow", description: "A cunning president with a sharp intellect ", service_id: 7, cost: 19.99, ratings: 0,
about: "He is use organizing and watching the games from a far.  He is also significantly older which would greatly hinder his ability to survive.  However, he is extremely cunning and he knows how to create alliances.")
product52.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/snow.png"), filename:"snow.png")

product53 = Product.create(title: "Peeta Mellark", description: "A reliable candidate who lacks strength", service_id: 7, cost: 59.99, ratings: 0,
about: "Peeta in theory has also won the games twice, so he would be a good pick as tribute however if it wasn’t for Katniss it is highly unlikely, he would survive.  Although, Peeta is extremely good at making connections, which may help him win as tribute. ")
product53.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/peeta.png"), filename:"peeta.png")

product54 = Product.create(title: "Cinna", description: "A fashion icon with a strong moral compass", service_id: 7, cost: 39.99, ratings: 0,
about: "He has an excellent eye for fashion and a strong moral compass.  However, he is yet to prove his abilities related to the games.  Furthermore, his strong moral compass would greatly hinder his abilities as tribute.")
product54.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/cinna.png"), filename:"cinna.png")

product55 = Product.create(title: "Effie Trinket", description: "A fashion celebrity with a heart of gold", service_id: 7, cost: 39.99, ratings: 0,
about: "Effie prefers comfort not the grueling conditions that come along with being a tribute.  She would perform rather weakly as tribute, therefore, if you are in the mood for a loss she would be a good pick.")
product55.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/effie.png"), filename:"effie.png")

product56 = Product.create(title: "Haymitch Abernathy", description: "A one time winner with questionable habits.", service_id: 7, cost: 59.99, ratings: 0,
about: "A one-time hunger game winner who is now an alcoholic.  Although Haymitch has been successful in the past it is highly unlikely that his binge drinking over the year would allow him to perform effectively as a tribute.  However, he is very good at the mind games that are involved with being the tribute.")
product56.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/haymitch.png"), filename:"haymitch.png")

service8 = Service.create(title: "marble game partner")
service8.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/marbles.png"), filename:"marbles.png")

product59 = Product.create(title: "Gi-Hun", description: "A fun person who has a heart of gold", service_id: 8, cost: 89.99, ratings: 0,
about: "He will start out fair and square in the game. He will then realize that cheating may help him win. Try to make sure he is not cheating.  It is easy to figure out though because he gets very guilty. ")
product59.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Gihun.png"), filename:"Gihun.png")

product60 = Product.create(title: "Kang-Se-Byok", description: "The most deserving winner of them all", service_id: 8, cost: 99.99, ratings: 0,
about: "She will think about her whole life with you. Near the end, you guys will play a simple 1 round game. That will conclude the winner fairly.")
product60.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Kang.png"), filename:"Kang.png")

product61 = Product.create(title: "Oh-Il-Nam", description: "You may win the battle but he wins the war", service_id: 8, cost: 9.99, ratings: 0,
about: "You can try to cheat, but he knows. He will play normally, fair and square. If he thinks you’ve cheated, prepare for a little lesson. But he is much smarter than you think, you may win the battle with him but never the war.")
product61.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Ohil.png"), filename:"Ohil.png")

product62 = Product.create(title: "Ji-Yeoung", description: "The nicest person to ever exist, she desrves to win", service_id: 8, cost: 99.99, ratings: 0,
about: "She is emotional and will try to really get to know you when playing the marble game.  In addition, she is extremely fair and logical and understands the grand scheme of things.")
product62.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/jiye.png"), filename:"jiye.png")

product63 = Product.create(title: "Ali Abdul", description: "Sadly fair and square never wins the game", service_id: 8, cost: 39.99, ratings: 0,
about: "He is a bit naive, so he won’t try to cheat. You can even trick him, and he will realize  but only after the game is over.  If you are looking to play a fair game he is the partner for you.")
product63.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/ali.png"), filename:"ali.png")

product64 = Product.create(title: "Cho Sang-Woo", description: "He is willing to do whatever it takes to win", service_id: 8, cost: 79.99, ratings: 0,
about: "He will cheat you. No matter what, be prepared for deception. He will seem like he is in pain, then use that against you. He will fake being your friend, and then steal all your marbles. It will be a mess.")
product64.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/chosang.png"), filename:"chosang.png")

product65 = Product.create(title: "Front Man", description: "The original ring leader, the house always wins", service_id: 8, cost: 19.99, ratings: 0,
about: "He will probably scare you with guns pointing at your head. He will probably make you give all his marbles, so he is a really unfair partner, since the odds were never really in your favour. If you take one of his marbles, see you in the next life friend.")
product65.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/frontman.png"), filename:"frontman.png")

product66 = Product.create(title: "Deok-Su", description: "A rude partner who will deceive you", service_id: 8, cost: 9.99, ratings: 0,
about: "He will be mean to you, and he will do what it takes to win.  He is especially good with comebacks especially when you think are just about to win.  He will also try and trick you, but his plans will usually fail. ")
product66.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/Deok.png"), filename:"Deok.png")

service9 = Service.create(title: "save the crabby patty formula")
service9.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/formula.png"), filename:"formula.png")

product67 = Product.create(title: "Squidward", description: "Please come again. when he’s not working.", service_id: 9, cost: 9.99, ratings: 0,
about: "If you don’t care about the formula, Squidward is meant for you. He will sleep under his work area and let Plankton get in. He might even just open the door for him. Squidward will protect nothing, except maybe his clarinet and peace. ")
product67.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/squidward.png"), filename:"squidward.png")

product68 = Product.create(title: "Spongebob", description: "Hands down most loyal employee ever", service_id: 9, cost: 99.99, ratings: 0,
about: "He will do anything to save the formula. He will smack his enemy’s with spatulas. He will chase them far, far and away. He will dry out for the formula. He will become a bad person for the formula. He will do anything.")
product68.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/spongebob.png"), filename:"spongebob.png")

product69 = Product.create(title: "Patrick", description: "Requires 20 hours of sleep minimum", service_id: 9, cost: 19.99, ratings: 0,
about: "Patrick is a great friend to Spongebob. He will listen to his wishes if he understands. However, if he does not, he will probably sleep and drool over the formula. So, if Patrick can figure out what is going on he might be able to help but probably not.")
product69.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/patrick.png"), filename:"patrick.png")

product70 = Product.create(title: "Mermaid Man and Barnacle Boy", description: "Must keep their strength to fight evil", service_id: 9, cost: 29.99, ratings: 0,
about: "They are literal superheroes with tremendous gadgets, but they are only usable if they can reach their backs pockets without collapsing. They will do anything to help if they can find their car.")
product70.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/mermaid.png"), filename:"mermaid.png")

product71 = Product.create(title: "Mrs. Puff", description: "She hates Spongebob more than anything", service_id: 9, cost: 19.99, ratings: 0,
about: "Mrs. Puff would love to have Krabby patties, if Spongebob did not work at the Krusty Krab. Her hate for spongebob has led to a life of hate, which has led to a lot of puffs.  So realistically she would probably steal the formula herself.")
product71.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/puff.png"), filename:"puff.png")

product72 = Product.create(title: "Karen", description: "She has the most knowledge in all of Bikini Bottom", service_id: 9, cost: 49.99, ratings: 0,
about: "A computer who will protect as programmed. She will listen to you if it makes sense logically.  ")
product72.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/karen.png"), filename:"karen.png")

product73 = Product.create(title: "Pearl", description: "Don’t be cheap she needs to shop ", service_id: 9, cost: 99.99, ratings: 0,
about: "She wants to live her normal teenage life. She will protect the formula if she gets mall money. Like father like daughter.")
product73.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/pearl.png"), filename:"pearl.png")

product74 = Product.create(title: "The Flying Dutchman", description: "He is THE Flying Dutchman", service_id: 9, cost: 9.99, ratings: 0,
about: "He can’t exactly protect, but he can scare. And plankton does get scared easily so this ghost may your solution to protect the krabby patty formula.")
product74.photo.attach(io: open("https://herozon-dev.s3.ca-central-1.amazonaws.com/dutch.png"), filename:"dutch.png")