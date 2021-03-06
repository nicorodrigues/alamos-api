import express from "express";

import * as UsersController from "../controllers/UsersController";

const router: express.Router = express.Router();

router.get("/", UsersController.getUsersData);

export default router;
