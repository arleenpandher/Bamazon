
# Herozon 

Herozon is a clone of Amazon basis.  This website allows users to browse, purchase, and review services offered by their favourite heros.

Visit Herozon: https://herozon.herokuapp.com/#/

## Feautures 

1) Reviews - Users have the ability to add/edit/delete.
*To improve the functionality of thr website, the average ratings are dynamically updating.  When a user creates, edits, or deletes a review, the products average ratings are automatically updated and this is reflected on the product show page.  This functionality was implemented through the use of a custom algorithm that determines the new average rating based on what the user has done and then updates the product's average rating in the backend when the event listener is set off.  

2) Profile - Users have the ability to view all their transactions and reviews.
*To improve the user experience, user's can view all the details regarding their previous transactions like the time the service was purchased and the quantity.  While looking at each transaction, user have the ability to buy that service again, write a review for that product, view that heros show page, or view the other heros who offer that same service.   Users also have the abilty to view all the reviews that they have left for other heros.  The ability to view all the reviews for a hero were implemented using a custom route to the index.  Initially, the index route was reserved to retrive all the reviews that were dedicated to a specific product and this was implemented on the product show page, however when the decision was made to allow users to also view their reviews, instead of creating another route to a controller that would not make sense and would not adhere to RESTful API best practices, a custom route was implemented. 




## Technologies, Libraries, APIs

This project has been implemented with the following technologies:

1) React and Redux on the Frontend 
2) Ruby on Rails in the Backend 
3) Webpack and Babel to bundle and transpile the source JavaScript code 
4) npm to manage project dependencies 
5) AWS acts as a server to store pictures 



