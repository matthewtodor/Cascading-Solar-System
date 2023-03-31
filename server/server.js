const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up cors
app.use(
	cors({
		exposedHeaders: "Access-Control-Allow-Origin",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: true,
	})
);
// turn on routes
app.use(routes);

if (process.env.NODE_ENV == "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
}
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
