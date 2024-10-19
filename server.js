"use strict";

const { connect } = require("mongoose");

const server = require("./src/app");

const { PORT, MONGO_CONNECTION_STRING } = process.env;

(async () => {
  try {
    const conn = await connect(MONGO_CONNECTION_STRING);

    console.log(
      `Connected to MongoDB host: ${conn.connection.host} and database: ${conn.connection.name}`
    );

    server.listen(PORT, () => {
      console.log(`Server listening on port http://localhost:${PORT} 🚀`);
    });
  } catch (err) {
    console.error("Unable to start server due to error:");
    console.error(err);
  }
})();
