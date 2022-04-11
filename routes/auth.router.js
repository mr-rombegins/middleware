const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.get("/", login);
authRouter.get("/register", register);

module.exports = authRouter;
