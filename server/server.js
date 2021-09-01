const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const dotEnv = require("dotenv");
dotEnv.config();

const schema = require("./schema/schema")

//mongo db connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected To DB"))
    .catch((err) => console.log(err))


const app = express();

//cors
app.use(cors());

//graphql route
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen("8000", () => console.log("Graphql is runnig on http://localhost:8000/graphql"))