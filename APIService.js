const mongoose = require("mongoose");

const Ingredient = require("./models/Ingredient");
const Recipe = require("./models/Recipe");

const getIngredients = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const ingredients = await Ingredient.find();

    return ingredients;
  } catch (error) {
    console.error(error);
  }
};

const getIngredientById = async (id) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const ingredient = await Ingredient.findById(id);

    return ingredient;
  } catch (error) {
    console.error(error);
  }
};

const getRecipes = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const recipes = await Recipe.find();

    return recipes;
  } catch (error) {
    console.error(error);
  }
};

const getRecipeById = async (id) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getIngredients, getIngredientById, getRecipies, getRecipeById };
