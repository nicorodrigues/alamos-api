import express from "express";

import * as PublicationsController from "../controllers/PublicationsController";

const router: express.Router = express.Router();

router.get("/user/:id", PublicationsController.getPublicationsFromUser);

export default router;
