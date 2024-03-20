async function dbInit() {
    let conn;
    try {
        // Create a new connection
        conn = await mariadb.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
        });
  
        // Print connection thread
        console.log(`Connected!`);
    } catch (err) {
        // Print error
        console.log(err);
    } finally {
        // Close connection
        if (conn) await conn.close();
    }
  }
