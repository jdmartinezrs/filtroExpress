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

async getDishByIdController(req, res){
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const food = await this.foodService.getDishByIdService(req.params.id);
        res.status(200).json(food);
    }
    catch (error) {
        const errorObj = JSON.parse(error.message);
        res.status(errorObj.status).json({ message: errorObj.message });
    }
}

async foodSearchBarController(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        
        const searchTerm = req.query.searchTerm; 
        const food = await this.foodService.foodSearchBarService(searchTerm);
        
        res.status(200).json(food);
    } catch (error) {
        const errorObj = JSON.parse(error.message);
        res.status(errorObj.status).json({ message: errorObj.message });
    }
}



}

module.exports = FoodController;