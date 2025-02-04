import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { RestaurantMenu as RecipeIcon } from '@mui/icons-material';
import { AppDispatch } from '../store/store';
import { fetchRecipes } from '../store/recipeSlice';
import { useUserContext } from '../context/UserContext';
import RecipeForm from '../components/RecipeForm';
import { api } from '../services/api';

const recipeSchema = yup.object().shape({
  title: yup.string().required('Title is required').min(3).max(100),
  description: yup.string().required('Description is required').min(10).max(500),
  instructions: yup.string().required('Instructions are required').min(20),
  newIngredient: yup.string().optional().transform(value => value ? value : '')
    .test('ingredient-length', 'Ingredient must be at least 2 characters', function (value) {
      return value ? value.length >= 2 : true;
    }).max(50)
});

type FormInputs = yup.InferType<typeof recipeSchema>;

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { state: { user } } = useUserContext();
  const { register, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInputs>({
    resolver: yupResolver(recipeSchema), mode: 'onChange'
  });

  const onSubmit = async (data: FormInputs) => {
    if (!user?.id) return alert('You must be logged in to add a recipe');
    const recipeData = { title: data.title, description: data.description, instructions: data.instructions, ingredients, products: [] };
    try {
      await api.createRecipe(recipeData, user.id);
      dispatch(fetchRecipes());
      navigate('/recipes');
    } catch (error: any) {
      alert(error.message || 'Failed to add recipe');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}>
        <RecipeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h2">Add New Recipe</Typography>
      </Box>
      <RecipeForm
        register={register} watch={watch} errors={errors}
        ingredients={ingredients} setIngredients={setIngredients}
        isSubmitting={isSubmitting} onSubmit={handleSubmit(onSubmit)}
      />
    </Box>
  );
};

export default AddRecipe;