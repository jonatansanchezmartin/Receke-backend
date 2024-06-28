const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const APIService = require("./APIService");

app.use(express.json());
app.use(cors());

app.get("/api/ingredients/", (req, res) => {
  return APIService.getIngredients();
});

app.get("/api/ingredients/:id", (req, res) => {
  return APIService.getIngredientById(req.params.id);
});

app.get("/api/recipes/", (req, res) => {
  return APIService.getRecipes();
});

app.get("/api/recipes/:id", (req, res) => {
  return APIService.getRecipeById(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
