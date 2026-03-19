export default interface configuration {
  application: {
    port: number | string;
  };
  cors: {
    origin: string;
  };
  database: {
    connectionString: string;
  };
  sessions: {
    cookieDomain: string;
    cookieSecure: boolean;
    sessionSecret: string;
  };
}
