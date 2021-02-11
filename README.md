  # airplanes
  This is a Typescript React project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [nodejs](https://nodejs.org/en/).

  ## Getting Started

  Download the project.
  ### Web
  First, enter in the _web_ folder and, install the dependencies and run the development server:

  ```bash
  - npm install

  # than
  - npm start

  ```
  The project will start on http://localhost:3000

  #### Features:
  - - [x] List all airplanes 
  - - [x] Create a new airplane
  - - [x] Delete an airplane
  - - [x] Search an airplane by producer
  - - [ ] Edit an airplane (TODO)

  ### Server

  First, enter in the _server_ folder and, install the dependencies and run the development server:

  ```bash
  - npm install

  # than
  - npm run knex:migrations
  - npm run knex:seed
  - npm run dev

  ```
  The project will start on http://localhost:3333

  #### Features
  - - [x] List all airplanes 
  - - [x] Create a new airplane
  - - [x] Delete an airplane
  - - [x] Edit an airplane
  - - [x] Search an airplane by producer
  - - [x] Show info about an airplane

  Routes:
  - GET: `http://localhost:3333/aeronaves`
  - GET BY ID: `http://localhost:3333/aeronaves/(number)`
  - POST: `http://localhost:3333/aeronaves`
  - PUT: `http://localhost:3333/aeronaves/(number)`
  - DELETE: `http://localhost:3333/aeronaves/(number)`
  - FIND: `http://localhost:3333/aeronaves/find`

