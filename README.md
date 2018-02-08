# EKA-codingChallenge
A UI that lets users sign up by collecting and storing their information into a PostgreSQL database. Users information include their username, password, email address, first and last name, phone number, and physicall address information.  

#Prerequisites
Things you need to have installed on your local machine
- PostreSQL
- Node

#Getting Started
These instructions will get you a copy of the project up and running on your local machine 
- git clone https://github.com/rashidmuhammad07/EKA-codingChallenge.git
- npm install

#Technologies Used
FRONT-END
- React
- Redux
- Webpack
- Babel
- React-Router
- Material-UI
- HTML
- CSS

# BACK-END
- Node
- Express
- Knex
- Bookshelf
- PostgreSQL

Note: 
- if a user enters anything other than integers when asked for the phone number or zip code on the sign up forms, http requests will not be made successfully. Database will not be able to store that data.