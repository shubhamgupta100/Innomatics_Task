const express = require("express");

const router = express.Router();
const homeController = require("../controllers/homeController");
const { create, register } = require("../controllers/registerController");
const { createSession, login } = require("../controllers/loginController");

console.log("router loaded");

router.get("/", homeController.home);
router.post("/create", create);
router.post("/createSession", createSession);
router.get("/register", register);
router.get("/login", login);

module.exports = router;
