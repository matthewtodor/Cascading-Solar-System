const router = require("express").Router();
const planetRoutes = require("./planetRoutes");

router.use("/api", planetRoutes);

module.exports = router;
