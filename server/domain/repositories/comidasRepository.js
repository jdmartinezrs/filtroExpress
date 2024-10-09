const Food = require('../models/comidasModel');
const { ObjectId } = require('mongodb');

class FoodRepository{

    
    async getFoodByCategoryRepository(body) {
                    try {
                        const food = new Food();
                        let { categoria } = body;
                        const query = [
                            {
                                $match: { categoria: { $regex: new RegExp(categoria, 'i') } } 
                            },
                            {
                                $project: { 
                                    _id: 1,
                                    nombre: 1,
                                    categoria: 1,
                                    ocasion: 1,
                                    calorias: 1,
                                    descripcion: 1,
                                    ingredientes: 1,
                                    valoraciones: 1,
                                    promedioValoracion: 1,
                                    Delivery:1,
                                    foto:1
                                }
                            }
                        ];
            
                        const result = await food.getFoodByCategory(query); 
                        return result;
                    } catch (error) {
                        throw new Error(JSON.stringify({ status: 400, message: 'Error retrieving food by category' }));
                    }
                }

                async getDishByIdRepository(id){
                    try{
                        const food = new Food();
                        return await food.getDishByIdModel(id);
                    }catch (error){
                        throw new Error(JSON.stringify({ status: 400, message: 'Error retrieving dishes' }));
                    }
                }

                async foodSearchBarRepository(searchTerm) {
                    try {
                        const query = [
                            {
                                $match: {
                                    nombre: { $regex: searchTerm, $options: 'i' } 
                                }
                            }
                        ];
                        const food = new Food();
                        const result = await food.foodSearchBarModel(query);
                        
                        console.log("Query Result:", result); 
                        
                        return result;
                    } catch (error) {
                        throw new Error(JSON.stringify({ status: 400, message: 'Error searching bar workshops' }));
                    }
                }

            }
            
            module.exports = FoodRepository;
            



