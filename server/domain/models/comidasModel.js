const Comidas = require('../../adapters/database/comidasSchema')
const mongoose = require('mongoose');

class Food{

    async getAllFoods(){
        return await Comidas.find().exec();
    }

    async getFoodByCategory(query){
        return await Comidas.aggregate(query).exec();
    }
}

module.exports = Food