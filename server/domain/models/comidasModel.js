const Comidas = require('../../adapters/database/comidasSchema')
const mongoose = require('mongoose');

class Food{


    async getFoodByCategory(query){
        return await Comidas.aggregate(query).exec();
    }

    async getDishByIdModel(id){
        return await Comidas.findById(id).exec();
    }

    async foodSearchBarModel(query) {
        return await Comidas.aggregate(query).exec();
    }

    async getAllFood() {
        return await Comidas.find({}).exec(); 
    }

}

module.exports = Food