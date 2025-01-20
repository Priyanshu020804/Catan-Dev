## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node v 20.10.0

Type the following commands in the terminal to verify your node and npm versions

### Install

* Install node modules

   ```bash
   cd frontend
   npm install
   cd..
   cd backend
   npm install
   ```


### Starting both front end and back end servers

* Build application

  This command will start the front end part.

  ```bash
  
  cd frontend
  npm run start

  ```
  This command will start the back end server.
  
   ```bash
  
  cd backend
  node index.js

  ```

# Configuration Setup

Before running the application, make sure to set up your environment variables by creating a `.env` file in the `backend` subfolder of your project. Follow these steps:

1. Navigate to the `backend` subfolder in your project directory.

2. Create a new file named `.env` in the `backend` subfolder.

3. Open the `.env` file and add the following content:

```env
MONGO_PASSWORD= Your_Mongo_Password_Here
```


