
# Simple Task API

This is a simple REST API that allows a user to create tasks, delete tasks, update tasks given an ID and retrieve the details of all tasks or a single task


## Tech Stack

- Node.js
- Express.js
- Mongo DB
- Swagger UI
- Typescript
- Render for Hosting

## Run Locally

Clone the project

```bash
  git clone `https://link-to-project`
```

Go to the project directory

```bash
  cd `into the folder downloaded`
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_PORT`: Port for server to be listened on

`MONGO_URL`: Mongo DB atlas url for connecting to cluster

`DB_NAME`: Name of Database created in Mongo


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

