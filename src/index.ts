import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import logger from "./services/logger";

import router from "./api/router";

const app = express();

app.use(cors());

// Login every api call
morgan.format("default_format", `":method :url" :status :res[content-length] - :response-time ms`);
app.use(morgan("default_format", { stream: logger.stream }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));

// A little bit of security
app.use(helmet());

// Loading router
app.use(router);

app.listen(process.env.APP_PORT || 4000, () => logger.info(`Listening on port: ${process.env.APP_PORT || 4000}`));
