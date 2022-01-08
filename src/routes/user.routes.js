import { Router } from "express";
import { signUp } from "../controllers/auth.controller";
import { authoritations, verify } from "../middleware";
const router = Router();

router.route('/').post([authoritations.verifyToken, authoritations.isAdmin, verify.checkRolesExisted, verify.checkDuplicateUsernameOrEmail], signUp)

export default router;