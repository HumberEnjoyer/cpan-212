
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
});

export default model('Recipe', RecipeSchema);