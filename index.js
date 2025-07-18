// index.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  let responseText = "Default fallback response.";

  if (intent === "Hydration Reminder") {
    responseText = "Remember to drink 2 glasses of water post donation. Stay hydrated!";
  } else if (intent === "Feeling Dizzy") {
    responseText = "Please sit down, take deep breaths, and sip some water. If dizziness continues, seek medical help.";
  }

  res.json({
    fulfillmentText: responseText,
  });
});

app.listen(PORT, () => console.log(`AI Blood Buddy webhook running on port ${PORT}`));
