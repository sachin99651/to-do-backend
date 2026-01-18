# Project Overview
## Packages Installation 
- First I install the package.json using `npm init -y` 
-Then install packages like **express**,**mongoose** and **nodemon** (In dev dependecy).
### package.json
- In package.json set index.js as main and also write an script for nodemo (for testing the code).

## File Structure

backend/  
├── controllers/  
│   └── todosController.js   
├── db/   
│   └── connectDB.js   
├── models/   
│   └── Todo.js  
├── Routes/   
│   └── web.js  
├── node_modules/  
├── .env  
├── .gitignore  
├── index.js  
├── package-lock.json  
├── package.json  
└── README.md

## index.js

- Import all Files and Packages (eg: **express**, **dotenv**,    **connectDB**, **web** etc)
- Then configeration setup for **express**, **dotenv**, **port** and **Database url**/. 
- Then set the middlewares like : **connectDB**, **express.json**.
- Then set up a routes with the endpoint **/api/todo**.
- And at the end setup a port listing snipped.

## Todo.js
- Setup a schema for Database in this file like for Todo list i need only two thing first one is item (tasks) and other is completed (for checking the task is completed or not )

## todosControllers.js
- In controller file I placed all my controllers like **createDoc**, **updateDocById**, **deleteDocById**, and **getAllDoc**.

## web.js
- In web.js first I imports **express**, **router** and **todoController**
- Then set all the routes and their endpoints here

## connectDB.js
- First import the mongoose in **connectDB.js**
- And then setup the connection between express and mongoDB with giving the data like DB_URL (in enviroment varriable) DB_NAME etc.

## .env
In .env I give the database URL the port number and the database name.

# Problem Statement
- This is my backend first project in deployment. So I face many difficulties like env file declaration.
- I use MongoDB compass and for deployment, I explore Atlas for the first and forgot to update the url of database in .env file which shows me error.
- After deployment I introduced with cors and then I install it in my code and push it on github repository the render automatically make those changes.

## Links
[Frontend repository link](https://github.com/sachin99651/To-Do-List.git)  
[Frontend Deployed Netlify Link](https://to-do-list-sch.netlify.app/)  
[Backent repository link](https://github.com/sachin99651/to-do-backend.git)  
[Render Deployed Api Link](https://to-do-backend-3of0.onrender.com)