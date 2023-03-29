const router = require("express").Router();
const planetRoutes = require("./planetRoutes");

router.use("/planets", planetRoutes);

module.exports = router;
