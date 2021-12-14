const express = require("express");
const cors = require("cors");

require("./app/database/mongoose.js");

const app = express();

app.use = cors();

app.use(express.json());

app.use("/v1", require("./routes.js"));

app.listen(3000, () => console.log("Servidor online"))