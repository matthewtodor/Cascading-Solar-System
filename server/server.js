const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(
	cors({
		origin: "http://localhost:3000",
		exposedHeaders: "Access-Control-Allow-Origin",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: true,
	})
);
console.log("app", app.use);
app.use(routes);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
