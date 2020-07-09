# Brew Review Server
This is the back end to my [Brew Review](https://kailcro.github.io/brew-review-client/) application.
This application prompts users to create an account, and allows them to post or view reviews of different beers.
Cheers!

## Technologies Used
- Express
- MongoDB
- Mongoose
- Node.js

## Entity-Relationship Diagram
![ERD](https://i.imgur.com/XClf6d6.png)

## Planning History
The original idea came from my love of good beer. The cool thing about beer is that my idea of "good beer", can be wildly different from your idea of "good beer". Beers come in all different types, colors, flavors and places - and they're goodness is subjective!

My idea was to build an application that for allowed people to read different reviews on beers, allowing them to get a better idea of it's something they would enjoy.

I started with building the backend model for beer and users. I then moved on to building out the model of reviews, which is a subdocument of beer. (Beers can have zero to many reviews). After that I moved onto the client side, to work on my AJAX calls, and finally pulling a solid UI together.
