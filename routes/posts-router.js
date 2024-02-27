import express from "express";
import { getAll, add, getById } from "../controllers/trips/index.js";
import { postsSchemas } from "../schemas/index.js";
import { isEmptyBody, isValidId, authenticate } from "../middlewars/index.js";
import { validateBody } from "../decorators/index.js";

const postsRouter = express.Router();

postsRouter.use(authenticate);

postsRouter.get("/", getAll);

postsRouter.get("/:id", isValidId, getById);

postsRouter.post("/", isEmptyBody, validateBody(postsSchemas.postAddSchema), add);

export default postsRouter;
