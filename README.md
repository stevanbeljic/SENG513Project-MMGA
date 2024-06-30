# Make Mobile Great Again (MMGA)

Live site available at: https://makemobilegreatagain.pages.dev/<br>
<b>Note: Backend currently unavailable due to termination of Railway Trial</b>

Made by Stevan Beljic, Nathan Rompfh, William Chan, and Justin Chua for SENG 513 Final Project

A place to give aspiring mobile game developers a platform to showcase their up-and-coming or recently released mobile games, and to provide a platform to promote discussion, knowledge, and thoughts of mobile gaming in general.

_______________________________________________________________________________________________________________________________________________________________

# Run locally using Docker

To start Make Mobile Great Again in Docker:

1. Ensure lines 27-29 in ``server/model/model.js`` are uncommented, and lines 31-33 are commented out. Also ensure the timeout on line ``91`` is set to at least 15000.
2. Ensure Docker is running on your system.
3. In a terminal, navigate to the project's root directory (where the docker-compose, dockerfiles, client and server folders are located).
4. Enter ``docker-compose up --build -d`` to execute the docker compose and build the containers.
5. After ~15 seconds, the database will be populated, the backend will be connected to the database, and the frontend is ready to use.
6. Navigate in a browser to ``localhost:80`` to use the site!

# Run locally using XAMPP

Firstly, run XAMPP on your system in admin mode, and ensure Apache and MySQL/MariaDB (on port 3306) are both running.
Now you may continue with the server and client setups.

### Server Setup

1. Go into the server directory\
   &nbsp;&nbsp;&nbsp;`cd server`
2. Install all dependencies\
   &nbsp;&nbsp;&nbsp;`npm install`
3. Ensure lines 31-33 in ``server/model/model.js`` are uncommented, and lines 27-29 are commented out. The timeout on line ``91`` can be decreased to ``0`` since you should already have the database running through XAMPP.
4. Run the ServiceController file\
   `npx nodemon serviceController.js`
5. The server is now running and ready to communicate with a client!

### Client Setup

1. Go into the client directory\
  &nbsp;&nbsp;&nbsp;`cd client`
2. Install all dependencies\
   &nbsp;&nbsp;&nbsp;`npm install`
3. Run the client\
   &nbsp;&nbsp;&nbsp; `npm run dev`
