import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/Schema";
import resolvers from "./data/resolvers";
import { connectMongo } from "./data/dbConnectors"; // Import the connectMongo function from dbConnector.js

const app = express();
const PORT = 8080;

// Connect to MongoDB
connectMongo().then(() => {
    // MongoDB connected, start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));
