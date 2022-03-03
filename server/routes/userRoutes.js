const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/signin", authUser);

module.exports = router;
