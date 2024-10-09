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
                                $project: { // Corrige la sintaxis de $project
                                    _id: 1,
                                    nombre: 1,
                                    tipo: 1,
                                    ingredientes: 1,
                                    precio: 1,
                                    imagen: 1,
                                    categoria: 1
                                }
                            }
                        ];
            
                        const result = await food.getFoodByCategory(query); 
                        return result;
                    } catch (error) {
                        throw new Error(JSON.stringify({ status: 400, message: 'Error retrieving food by category' }));
                    }
                }
            }
            
            module.exports = FoodRepository;
            



