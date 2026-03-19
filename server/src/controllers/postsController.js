// For accessing posts from the database
const postgres = require("../db/postgres");
// Get the database pool instance
const pool = postgres.pool();
// The controller for posts
module.exports = {
  getAll: async (req, res) => {
    const response = await pool.query("SELECT * FROM posts ORDER BY date DESC");
    console.log(response);
    res.json(response.rows);
  },
};
