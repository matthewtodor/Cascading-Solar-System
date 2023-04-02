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

<details>
<summary><h3><strong>Technical Requirements</strong></h3></summary>

 <h4>Planets:</h4>
    <ul>
    <li>
Each planet of the solar system must have its own profile page.
    </li>
    <ul>
    <li>Navigating to a planet changes the URL and displays the planet associated with that url endpoint</li>
    </ul>
    <li>
    
Each page must include at a minimum (Name of the planet, size, distance from the Sun, three identifying facts, solid or gas core, and a visual representation of the planet)
NOTE: No images, assets, emojis, or SVGs are permitted. The visual representation of each planet must be made ENTIRELY out of CSS.
    </li>
    <li>
If the planet has a moon, you must display the following information for every moon (Name, history behind name, and size). 
    </li>
<li>
Planet pages must include at least two different components that are NOT used on your homepage.
    </li>
    <li>
    
If a planet has more than one moon, the moon information must be displayed in repeating elements.
    </li>
    <li>
    
All planet and moon content MUST be stored in a database.
    </li>
    </ul>

Backend:

-- You must use foreign keys.
-- Planets and Moons must be stored separate from one another.
-- You must incorporate one ENUM for the planet data.

Homepage:

-- The homepage should be an overview of the solar system.
-- The data included will be up to each team.
-- The homepage must include at least two components that are NOT used on any planet page.
-- Homepage content does not need to be stored in a database and can be coded into your components.

</details>

### Current Wireframe:

![Solar System Wireframe](./assets/images/solar-system-wireframe.png)
