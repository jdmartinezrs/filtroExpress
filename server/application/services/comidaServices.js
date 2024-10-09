const  FoodRepository =  require('../../domain/repositories/comidasRepository')

class FoodService{
    constructor(){
        this.FoodService = new FoodRepository();
    }

    async getFoodCategoryService(category){
        const food = await this.FoodService.getFoodByCategoryRepository(category);
        if(!food){
            throw new Error(JSON.stringify({status: 404, message:'food not found'}));
        }
        return food;
    }


}

module.exports = FoodService;