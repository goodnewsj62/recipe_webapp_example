# Setup

- pull the latest code from github

- then install nodejs and the npm package manager

- run npm install to install all packages\

```bash
npm install
```

- To setup the application copy the content from .env.example to .env

- create an upload thing account to get upload thing secret an id "We are using upload thing to store files for free" [uploadthing](https://uploadthing.com)

- alternatively there is an /image route to store files locally which may require extra code adjustment in the frontend to use

- make sure you also have docker installed on your machine

- now run

```bash
~$: docker compose up
```

- now open another terminal and run the below commad to apply migrations

```bash
npx prisma migrate dev
```

- finally run the command to start the server locally

```bash
npm run dev
```

## Structure

This project currently use the layered architecture aproach...

the services handle core busincess logic and interact with the database model

the controllers are responsible to create meaninful json response

all routes are available in the routes folder

and server.ts is the main file from where the server is spawned
