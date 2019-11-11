import "dotenv/config";

import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import databaseConfig from "./config/database";

mongoose.connect(databaseConfig.uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.start({ port: 7000 });
