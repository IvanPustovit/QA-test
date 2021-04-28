require("dotenv").config();

const PORT = process.env.PORT || 3000;
const CONNECTION_URI = process.env.DB_URI;

module.exports = { PORT, CONNECTION_URI };
