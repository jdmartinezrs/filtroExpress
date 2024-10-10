const express = require('express');
const  FoodController = require("../controllers/comidaController")
const  FoodValidator = require("../validator/comidaValidator")

const router = express.Router();
const  foodController = new FoodController();
const foodValidator = new FoodValidator();


router.get("/getFoot",foodValidator.getAllFoodValidator (),(req,res)=>foodController.getAllFoodController(req,res))
router.post("/searchFoodCategory",foodValidator.getFoodCategoryServiceValidator(),(req,res)=>
foodController.getFoodCategoryService(req, res));
router.get('/foodSearchBar',foodValidator.foodSearchBarValidator(), (req, res) => 
foodController.foodSearchBarController(req, res))
router.get("/:id",foodValidator.getDishByIdValidator(),(req,res)=>foodController.getDishByIdController(req, res));




module.exports =router;
