import express from 'express';
import { UsersControllers } from './user.controller';
const router = express.Router();

router.post("/store-user",UsersControllers.StoreUser);
router.get("/:email",UsersControllers.getSingleUser);
export const UsersRouter = router;