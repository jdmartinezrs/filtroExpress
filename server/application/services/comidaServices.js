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

    async getDishByIdService(id){
        const food = await this.FoodService.getDishByIdRepository(id);
        if(!food){
            throw new Error(JSON.stringify({ status: 404, message: 'Dish wasnt found' }));
        }
        return food;
    }

}

module.exports = FoodService;