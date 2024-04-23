require('../node_modules/dotenv').config();
const express = require('../node_modules/express');
const {schema} = require('./schema');
const graphqlHTTP = require('../node_modules/express-graphql');
const bodyParser = require("../node_modules/body-parser");
const mongoose = require('../node_modules/mongoose');
const cors = require("../node_modules/cors");


const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();

app.use(bodyParser.json());

app.use(cors({
    domains: '*',
    methods: "*"
}));


app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql: true,
    context : {
      messageId : 'test'
    }
}));


app.listen(3000, () => {
    console.log(`Server started at ${3000} Graphql`)
});