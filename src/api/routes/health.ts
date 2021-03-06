import express from "express";

import * as HealthController from "../controllers/HealthController";

const router: express.Router = express.Router();

router.get("/", HealthController.getOverallHealth);

export default router;
