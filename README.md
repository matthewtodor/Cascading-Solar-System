# Cascading Solar System

An educational website intended to teach students about the solar system we live in. The Sun, eight plants and their moons are included, with various information about them provided.

## [Live Demo](https://cascading-solar-system.herokuapp.com/ "Cascading Solar System")

## Run Locally

```javascript
> git clone https://github.com/Ccatalyst/Cascading-Solar-System.git
> ensure your mySQL server is running
> npm install
```

Navigate to the client directory and rename the .env.EXAMPLE file to .env.

Navigate to the server directory and rename the .env.EXAMPLE file to .env.

Open the server .env file and enter your mySQL server login information:

```javascript
DB_USER = "<your username>";
DB_PASSWORD = "<your password>";
DB_NAME = "solar_system_db";
```

Navigate back to the root directory of the application and run:

```javascript
>npm run seed
>npm run develop
```

The server will run on `localhost:3001` by default, and the react application will run on `localhost:3000` by default.

## Screenshots

# INSERT PICTURES HERE WHEN FINALIZED

## License

This project is licensed under the [MIT copyright license](./LICENSE "MIT copyright license").

## Contact Information

If you have any questions, please reach out via an email to one of us!

[Matthew Todor](todor.matthew.john@gmail.com "Matthew Todor")

[Eli Wood](contact.eliwood@gmail.com "Eli Wood")

[Jason Duran](jasonduran303@gmail.com "Jason Duran")

## Sources

The information about our solar system and it's bodies were collected from NASA's Solar System Exploration: Our Galactic Neighborhood. More information can be found at their website:

[Solar System Exploration: Our Galactic Neighborhood - NASA](https://solarsystem.nasa.gov/ "Solar System Exploration: Our Galactic Neighborhood")

### Current Wireframe:

![Solar System Wireframe](./assets/images/solar-system-wireframe.png)
