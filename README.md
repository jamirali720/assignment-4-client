# assignment-4

# Introduction of this project:

- This project is for sporting store
  - Any one can buy sporting goods for his necessary.
  - after that he can pay for payment for his purchase of goods online payment or cash on delivery
- What I have utilize in this project:
  - Express js, Typescript, Node js, Mongoose, Mongodb.
  - Dependencies:  nodemon, cors, Dotenv, react-helmet react-router-dom  react-redux RTK-query.
 
- To use this project:
  - You have to install dependencies by
  ```javascript
  npm install
  ```
- To start this project:
  - You have to run this command 
  ```javascript
  npm run dev
  ```

# Project Links: 
* [Live Deployment Link of vercel (Client)](https://assignment-4-client-theta.vercel.app/)
* [Live Deployment Link of vercel (Server)](https://assignment-4-server-bice.vercel.app/)

* [GitHub Repository Links (Server)](https://github.com/jamirali720/assignment-4-client)
* [GitHub Repository Links (Server)](https://github.com/jamirali720/assignemnt-4-server)


## Technology Stack:

- As Programming Language: TypeScript
- AS Web Framework: Express.js
- As Object Dada Model : Mongoose for MongoDB

# There are three models in this project server

1. Sport Model
2. Order Model
3. Team Model

# API Endpoints:

-products Routes:

1. Home : - Route: : A user / buyer/player can visit and search product by category :

2. All Products: Route: /products: A user /player can visit all products, search by name, and filter by brand, price, and ratings 

3. Manage products: Route: /manage-products

- A user / buyer/player can gets all products list with pagination and add product, update product and delete product;
- A user / buyer/player can gets all team members list with pagination and add team member, update member and delete member;
- A user / buyer/player can get all orders list, update orders status and delete orders;

3. Shopping Cart: Route: /cart

- A user / buyer/player  can process payment by cart checkout ;
 

### 1. Update product stock:
* when  A user / buyer/player purchase a goods of sporting and payment cash on delivery, the product's stock will be reduced at once.

* when  A user / buyer/player purchase a goods of sporting and pay by online payment method with stripe , the product's stock will not be reduced . But will be created order and saved in database. After that when a buyer update order status by shipped, then product's stock will be reduced.

### 3. Not Found Route:
* a global "Not Found" handler for unmatched routes   has been handled. When a route is not found, respond with a generic message: "Not Found."
```javascript
{
  "success": false,
  "statusCode": 404,
  "message": "Oops! Route Not Found or Invalid Route!"
}

```


