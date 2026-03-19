import { Pool } from "pg";

export default interface postgresConnection {
  connectToServer: () => void;
  pool: () => Pool;
}
