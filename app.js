const { json } = require("body-parser");
const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/one", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12WyVOTeAZI3-MqiikaO3WF6R2UMuOt5fuUzdefEbZf4";
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "projectOne",
    });

    res.send(getRows.data);
  } catch (err) {
    console.log("err", err);
  }
});
app.get("/two", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12WyVOTeAZI3-MqiikaO3WF6R2UMuOt5fuUzdefEbZf4";
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "projectTwo",
    });

    res.send(getRows.data);
  } catch (err) {
    console.log("err", err);
  }
});
app.get("/three", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12WyVOTeAZI3-MqiikaO3WF6R2UMuOt5fuUzdefEbZf4";
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "projectThree",
    });

    res.send(getRows.data);
  } catch (err) {
    console.log("err", err);
  }
});
app.get("/four", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "12WyVOTeAZI3-MqiikaO3WF6R2UMuOt5fuUzdefEbZf4";
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "projectFour",
    });

    res.send(getRows.data);
  } catch (err) {
    console.log("err", err);
  }
});


app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("hey " + process.env.PORT || 5000);
});
