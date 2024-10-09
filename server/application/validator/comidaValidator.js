const { body, query, param } = require('express-validator');
const { ObjectId } = require('mongoose').Types;
class FoodValidator {

    getFoodCategoryServiceValidator = () => {
        return [
            body('categoria').notEmpty().isString().withMessage('Envia la categoria'), // ✔️ La categoría es obligatoria
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`); // ❌ No envíes nada en la URL
                }
                return true; 
            })
        ];
    };

    getDishByIdValidator = () =>{
        return[
            param('id').custom((value, { req }) => {
                if (!ObjectId.isValid(value)) {
                    throw new Error('Submit a valid ID'); 
                }
                return true; 
            }),
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`); 
                }
                return true; 
            }),
            body().custom((value, { req }) => {
                if (Object.keys(req.body).length > 0) {
                    throw new Error('Do not send anything in the body'); 
                }
                return true; 
            })

        ]
    }
    
    foodSearchBarValidator = () => {
        return [
          query('searchTerm')
              .exists().withMessage('Search term is required.')
              .isString().withMessage('Search term must be a string.')
              .isLength({ min: 2, max: 50 }).withMessage('Search term must be between 2 and 50 characters.')  
      ];
    
      };
}

module.exports= FoodValidator;