const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");
const googleRoutes = require("./google");

// API Routes
router.use("/api/books", booksRoutes);
router.use("/api/google", googleRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;