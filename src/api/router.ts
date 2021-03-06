import express from "express";
import cors from "cors";
import { publications, users, health } from "./routes";

const router: express.Router = express.Router();

router.use(cors());
router.options("*", cors());

router.use("/health", health);
router.use("/publications", publications);
router.use("/users", users);

export default router;
