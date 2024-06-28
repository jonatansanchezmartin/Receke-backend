import mongoose from 'mongoose';
const { Schema } = mongoose;

const ingredientSchema = new Schema({
    _id: false,
    id: String,
    name: String,
    category: String,
    image: String
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;