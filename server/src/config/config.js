module.exports = {
  application: {
    port: process.env.PORT ?? 8000,
  },
  cors: {
    origin: process.env.CORS_ORIGIN ?? "http://localhost:8000",
  },
  database: {
    connectionString:
      process.env.DATABASE_URL ??
      "postgresql://postgres:password@localhost:5432/personal_blog",
  },
  sessions: {
    cookieDomain: process.env.SESSION_COOKIE_DOMAIN ?? "localhost",
    cookieSecure: process.env.SESSION_COOKIE_SECURE === "true" || false,
    sessionSecret: process.env.SESSION_SECRET ?? "supersecret",
  },
};
