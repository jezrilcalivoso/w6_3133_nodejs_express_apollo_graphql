const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//import ApolloServer


//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const DB_CONNECTION = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.${process.env.CLUSTER_ID}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

//TODO - Replace you Connection String here
const connectDB = async() => {
    await mongoose.connect(DB_CONNECTION)
}

//Define Apollo Server


//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server


//Start listen 
app.listen({ port: process.env.PORT }, () => {  
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  try {
      connectDB()
      console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log(`Unable to connect to DB : ${error.message}`);
  }
});
