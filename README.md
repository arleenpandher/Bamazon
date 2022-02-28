
# Herozon 

Herozon is a clone of Amazon basis.  This website allows users to browse, purchase, and review services offered by their favourite heros.

Visit Herozon: https://herozon.herokuapp.com/#/

## Feautures 

1) Reviews - Users have the ability to add/edit/delete.
*To improve the functionality of thr website, the average ratings are dynamically updating.  When a user creates, edits, or deletes a review, the products average ratings are automatically updated and this is reflected on the product show page.  This functionality was implemented through the use of a custom algorithm that determines the new average rating based on what the user has done and then updates the product's average rating in the backend when the event listener is set off.  



https://user-images.githubusercontent.com/93013360/154987188-9a4427e3-e1f2-499d-ae3b-c1d1a8fc906f.mp4



2) Profile - Users have the ability to view all their transactions and reviews.
*To improve the user experience, user's can view all the details regarding their previous transactions like the time the service was purchased and the quantity.  While looking at each transaction, user have the ability to buy that service again, write a review for that product, view that heros show page, or view the other heros who offer that same service.   Users also have the abilty to view all the reviews that they have left for other heros.  The ability to view all the reviews for a hero were implemented using a custom route to the index.  Initially, the index route was reserved to retrive all the reviews that were dedicated to a specific product and this was implemented on the product show page, however when the decision was made to allow users to also view their reviews, instead of creating another route to a controller that would not make sense and would not adhere to RESTful API best practices, a custom route was implemented. 



https://user-images.githubusercontent.com/93013360/154987210-de2ae385-935a-4444-af1c-d4258ecb28c0.mp4


3) Dynamic Search - Users can dynamically search for heros through the search bar.
*To improve the user experience, user's can search for heros dynamically, they can filter for a specific category, and then they can search for a hero within that category or they can search through all the available heros.  The ability to search for heros was implemented through a filtering process, as user's type they filter search through the database for heros with those letters and narrows down the search for users. 

![screen-recording (5)](https://user-images.githubusercontent.com/93013360/156066543-8694387c-041d-4fb7-9211-c00d96fa5c85.gif)


## Technologies, Libraries, APIs

This project has been implemented with the following technologies:

1) React and Redux on the Frontend 
2) Ruby on Rails in the Backend 
3) Webpack and Babel to bundle and transpile the source JavaScript code 
4) npm to manage project dependencies 
5) AWS acts as a server to store pictures 



