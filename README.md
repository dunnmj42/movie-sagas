# Movie Sagas!

## Description

Movie Sagas is a responsive, mobile friendly movie app that stores movies in a database, displays them in a list view, and allows the adding of new movies. Each movie in the list has additional details that are viewable in a detail view by clicking the "details" button in the card. Additionally, navigating to the "Add Movies" view allows the user to add a new movie, complete with title, poster image, description, and genre. The form on this page can be reset at any time by clicking the "clear" button. The "cancel" button will bring the user back to the list, while the "save" button will add the movie to the database, and return the user to the list view.

## Installation

1. Create a SQL database named `saga_movies_weekend`
2. The queries in the `database.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with data. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run `npm install` in the terminal
4. Run `npm run server` in the same terminal.
5. Run `npm run client` in a new terminal.
## Built With

 React, Redux, Node.js, PostgreSQL, Redux-Logger, Redux-Saga, and Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application a reality.