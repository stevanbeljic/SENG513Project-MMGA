To run 01_schema.sql (schema) and 02_init.sql (seed) files:
1. Within the root folder (src), ensure there is a folder named "scripts". If there is not, create one.
2. Place the 2 script files (01_schema.sql and 02_init.sql) within the scripts folder.
3. Ensure the docker compose file, "docker-compose.yml," is placed within the root folder (src).
4. In a terminal, set the working directory to the root directory (src).
5. Start the containers with the command: ``` docker-compose up ```
6. Wait while the necessary packages are installed and the containers are created. Upon creation, the database will be instantiated with the default tables and the pre-defined data.
