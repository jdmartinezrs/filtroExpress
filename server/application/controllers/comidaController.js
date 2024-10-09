const { validationResult } = require("express-validator");
const FoodService = require("../services/comidaServices");


class FoodController {

constructor(){
    this.foodService = new FoodService(); 
}

async getFoodCategoryService(req, res){
    try{
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      
        const food = await this.foodService.getFoodCategoryService(req.body);
      
        res.status(200).json(food);
    }catch (error){
        const errorObj = JSON.parse(error.message);
        res.status(errorObj.status).json({ errors: errorObj.message})
    }
}

}

module.exports = FoodController;