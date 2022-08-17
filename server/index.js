const express = require('express');
const colors = require('colors')
const gradient = require('gradient-string');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 5000;
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB :
connectDB();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgGreen.bold);
});


