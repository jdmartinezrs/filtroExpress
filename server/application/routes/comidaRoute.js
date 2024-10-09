const express = require('express');
const  FoodController = require("../controllers/comidaController")
const  FoodValidator = require("../validator/comidaValidator")

const router = express.Router();
const  foodController = new FoodController();
const foodValidator = new FoodValidator();

router.post("/searchFoodCategory",foodValidator.getFoodCategoryServiceValidator(),(req,res)=>
foodController.getFoodCategoryService(req, res));

module.exports =router;
