import express from 'express';
const router = express.Router();
import Recipe from '../models/Recipe.js';

//GET all recipes
router.get('/', async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      res.status(500).json({ error: 'Server error fetching recipes' });
    }
  });

//POST a new recipe
router.post('/', async (req, res) => {
  try {
    const { name, description, difficulty, ingredients, steps } = req.body;
    const newRecipe = new Recipe({
      name,
      description,
      difficulty,
      ingredients,
      steps,
    });
    await newRecipe.save();
    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error creating recipe' });
  }
});

//GET one recipe by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    return res.json(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error fetching recipe' });
  }
});

//PUT update a recipe by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, difficulty, ingredients, steps } = req.body;
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, description, difficulty, ingredients, steps },
      { new: true } 
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    return res.json(updatedRecipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error updating recipe' });
  }
});

//DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecipe = await Recipe.findByIdAndRemove(id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    return res.json({ message: 'Recipe successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error deleting recipe' });
  }
});

export default router;