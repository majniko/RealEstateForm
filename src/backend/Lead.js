const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const backendValidation = require("./backendValidation.js");

const app = express();
const port = 3001;
mongoose.connect("mongodb://localhost:27017/playground_test");
app.use(express.json());
app.use(cors());

const realEstateProps = mongoose.model("RealEstateProps", {
  estateType: String,
  region: String,
  district: String,
  name: String,
  phone: String,
  email: String,
});

app.post("/lead", async (req, res) => {
  console.log("req:", req.body);

  const lead = new realEstateProps(req.body);

  if (backendValidation.validate(lead)) {
    try {
      await lead.save();
      res.send(lead);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else res.status(400).send("Validation failed.");
});

app.listen(port, () => console.log("Lead.js is listening on port:", port));
