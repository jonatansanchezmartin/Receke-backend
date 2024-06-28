import mongoose from 'mongoose';
const { Schema } = mongoose;
import { Ingredient } from './Ingredient.js';

const recipeSchema = new Schema({
    _id: false,
    id: String,
    title: String,
    instructions: [String],
    image: String,
    ingredients: [Ingredient],
    evaluation: [Number]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export { Recipe };