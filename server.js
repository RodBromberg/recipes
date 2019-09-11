const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

// create graphql schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// connects to database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch(err => console.log(err));

// Initializes Application
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://front-end.foteekofficial.now.sh",
  credentials: true
};

app.use(cors(corsOptions));

app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "null)") {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.log(err);
    }
  }
  next();
});
//d

// create graphiql application
// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// connect schemas with GraphQL
app.use(
  "/graphql",
  graphqlExpress(({ currentUser }) => ({
    schema,
    context: {
      User,
      currentUser
    }
  }))
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`${PORT} is live`);
});

//fsdfds
