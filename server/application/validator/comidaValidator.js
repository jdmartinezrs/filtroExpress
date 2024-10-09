const { body, query, param } = require('express-validator');

class FoodValidator {

    getFoodCategoryServiceValidator = () => {
        return [
            body('categoria').notEmpty().isString().withMessage('Envia la categoria'), // ✔️ La categoría es obligatoria
            query().custom((value, { req }) => {
                if (Object.keys(req.query).length > 0) {
                    throw new Error(`Don't send anything in the url`); // ❌ No envíes nada en la URL
                }
                return true; // ✔️ Es válido
            })
        ];
    };
}

module.exports= FoodValidator;