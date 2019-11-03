const router = require("express").Router();
const googleController = require("../controllers/googleController");

//routes to /api/google/:query
router.route("/:query").get(googleController.findGoogleBooks);

module.exports = router;