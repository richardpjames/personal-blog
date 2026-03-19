import { Pool, PoolConfig } from "pg";

import type postgresConnection from "../types/postgresConnection";

// This is our application configuration
import config from "../config/config";

// We need to be able to access the pool from other files, so we create a variable to hold it and export a function to access it.
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
let pool: Pool | undefined;

const postgres: postgresConnection = {
  connectToServer: () => {
    const poolConfig: PoolConfig = {
      connectionString: config.database.connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    pool ??= new Pool(poolConfig);
  },
  pool: (): Pool => {
    // If the pool has not been initialized, throw an error. This should never happen if connectToServer() is called before any other function that uses the pool.
    if (!pool) {
      throw new Error(
        "Database pool not initialized. Call connectToServer() first.",
      );
    }
    // Return the pool to be used for queries. The pool will automatically manage connections and reuse them as needed.
    return pool;
  },
};

// Export the postgres object so that it can be imported and used in other files to connect to the database and execute queries.
export default postgres;
