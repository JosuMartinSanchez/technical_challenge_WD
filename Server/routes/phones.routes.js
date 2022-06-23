const Phone = require("../models/Phone.model");

const router = require("express").Router();

//! GET "/phones" => Muestra el listado de todos los telefonos

router.get("/", async (req, res, next) => {
  try {
    const response = await Phone.find();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

//! GET "/phones/:id" => Muestra los detalles de todos los telefonos

router.get("/:_id", async (req, res, next) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    const response = await Phone.findById(_id);
    console.log(response);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
