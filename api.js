const { Pool, types } = require('pg');

types.setTypeParser(1700, parseFloat);

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const githubIdAll = async (request, response) => {
    pool.query('SELECT github_id FROM user_github', (error, results) => {
      response.status(200).json(results.rows);
    });
};

module.exports = {
    githubIdAll
};
