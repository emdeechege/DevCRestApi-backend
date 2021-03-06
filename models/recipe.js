const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  time: { type: Number, required: true },
  difficulty: { type: Number, min: 1, max: 5 , required: true},
});

module.exports = mongoose.model('Recipe', recipeSchema);
