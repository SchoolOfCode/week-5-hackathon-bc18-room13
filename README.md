## Project description

Our project is to design, implement, and deploy a robust API using a managed PostgreSQL database hosted with a third-party provider.

We chose Render to be our database host.

## ERD (Entity Relationship Diagram)

Can be seen in the "erd.png" file.

## Existing Routes

To see the route handlers take a look inside `app.js`.

| Method | Path        | Request Body           | Result             | Status Code |
| ------ | ----------- | ---------------------- | ------------------ | ----------- |
| GET    | /movies     |                        | Get all movies     | 200         |
| GET    | /movies/:id |                        | Get a movies by ID | 200         |
| POST   | /movies     | A movie object         | Create a new movie | 201         |
| PATCH  | /movies/:id | A partial movie object | Update a movie     | 200         |
| DELETE | /movies/:id |                        | Delete a movie     | 200 / 204   |

| Method | Path           | Request Body              | Result                | Status Code |
| ------ | -------------- | ------------------------- | --------------------- | ----------- |
| GET    | /directors     |                           | Get all directors     | 200         |
| GET    | /directors/:id |                           | Get a director by ID  | 200         |
| POST   | /directors     | A director object         | Create a new director | 201         |
| PATCH  | /directors/:id | A partial director object | Update a director     | 200         |
| DELETE | /directors/:id |                           | Delete a director     | 200 / 204   |
