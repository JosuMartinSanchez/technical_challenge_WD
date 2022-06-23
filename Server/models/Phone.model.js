const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const phoneSchema = new Schema({
  id: {},
  name: {},
  manufacturer: {},
  description: {},
  color: {},
  price: {},
  imageFileName: {},
  screen: {},
  processor: {},
  ram: {},
});

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
