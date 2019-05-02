# README

- [Screamless](http://www.screamless.herokuapp.com) - a cover of Seamless, an online food delivery service for New York City and nearby boroughs.

![splash](/app/assets/images/splashpage1.png "Splash Page")
![splash2](/app/assets/images/splashpage2.png "Splash Page2")

## Features

- React.js and Flux frontend, Ruby on Rails backend
- Create accounts and authenticate
- Stores passwords as encrypted hashes using BCrypt
- Render restaurant locations by Google Maps Api and Geocoder
- CRUD functionality for restaurant reviews, menu items, and orders
- Host images AWS S3
- Add orders to shopping cart, using local storage cookies
- Persists shopping cart data between sessions on the database

## Walkthrough

Screamless offers an easy browsing experience to all restaurants and their menus without the need to sign up or sign in. However, for better access of restricted features such as orders, reviews, and saved profile, it's recommended for users to have an account. This allows users to effortlessly bookmark their favorite places, have multiple addresses, and most importantly order food!

![Signup](/app/assets/images/signin-signup.png "Signup Page")

Using backend Rails validations, customers with invalid credentials will see error messages until requirements are fulfilled, and server requests will be made.

### Home Page

Upon sign-in, user is greeted with their first name, preloaded address onto navigation bar, and past orders. If no address is given, all restaurants will render below past orders.

![HomePage](/app/assets/images/homepage.png "Home Page")

### Emplore All Restaurants

![HomePage](/app/assets/images/homepage2.png "Home Page")

### Restaurant Profile

User can explore each restaurant by search, filters, or explore. Each restaurant has a menu divided into three categories - appetizers, main, and desserts. In addition to menu items, user can look at restaurant's hours of operation, phone, and address (conveniently marked on map with Google API).

At the bottom of each restaurant show page is a section for reviews ordered by date, most recent first. Users can leave a review, edit or delete their review (if applicable).

![RestaurantShow](/app/assets/images/restaurant-show.png "Restaurant Show Page")

### User Profile

User can go to their profile page by clicking on their name on the top right corner. There, they can see their personal info such as name, email, address, saved payment methods, past orders, and view receipts.

![UserProfilePage](/app/assets/images/userprofile.png "User Profile")

### Order Settings

![UserProfilePage](/app/assets/images/pastorders.png "User Profile")

### Reorder

User can have ease of fast and convenient re-ordering from their favorite restaurants. Upon reorder, user's cart will be loaded with previously purchased items, and a modal will pop up for confirmation. There, they will be able to adjust their order settings and/or add a delivery message.

![UserReorderPage](/app/assets/images/reorder.png "User Reorder")

### Cart

Each user will have one shopping cart with the following -

- price
- edit quantity option
- delete option
- cancel option
- adjust order settings option
- add delivery message option

### Confirmation

User is prompt with a copy of their receipt which lists an estimated arrival time using live time, their itemized orders, and total.
User can also leave a review for the restaurant with a rating and description, which will save to the back end and rerender with a new review count and rating (if applicable).

![UserconfirmationPage](/app/assets/images/order-confirmation.png "User confirmation")

![UserConfirmationPage](/app/assets/images/order-confirmation2.png "User Confirmation")
