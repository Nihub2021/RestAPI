const { json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
const PORT = 8080;
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "12WyVOTeAZI3-MqiikaO3WF6R2UMuOt5fuUzdefEbZf4";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "projectFour",
  });

  res.send(getRows.data);
});

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("hey " + PORT);
});
