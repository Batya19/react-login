import axios, { AxiosError } from 'axios';
import { User, UserRegistration, UserResponse, UserUpdate } from '../types/User';

export const BASE_URL = 'http://localhost:3000/api';

const ERROR_MESSAGES: Record<number, string> = {
    401: 'Invalid email or password. Please try again.',
    404: 'User not found. Please check your email or create a new account.',
    409: 'An account with this email already exists.',
    400: 'Please check your input and try again.',
    500: 'Server error. Please try again later.',
};

const handleError = (error: AxiosError) => {
    const message = error.response?.status
        ? ERROR_MESSAGES[error.response.status]
        : !error.response
            ? 'Network error. Please check your internet connection.'
            : 'An unexpected error occurred. Please try again.';
    throw new Error(message);
};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const api = {
    login: async (email: string, password: string) => {
        try {
            const { data } = await axiosInstance.post<UserResponse>('/user/login', { email, password });
            return data;
        } catch (error) {
            handleError(error as AxiosError);
        }
    },

    register: async ({ email, password, ...userData }: UserRegistration) => {
        try {
            const { data: { userId } } = await axiosInstance.post<UserResponse>('/user/register', { email, password });
            if (!userId) throw new Error('Registration failed - no user ID received');

            const { data: userDetails } = await axiosInstance.put<User>(
                '/user',
                { ...userData, email },
                { headers: { 'user-id': userId.toString() } }
            );

            return { userId, user: { ...userDetails, id: userId, email } };
        } catch (error) {
            handleError(error as AxiosError);
        }
    },

    updateUser: async (userData: UserUpdate, userId: number) => {
        try {
            const { data } = await axiosInstance.put<User>(
                '/user',
                userData,
                { headers: { 'user-id': userId.toString() } }
            );
            return { ...data, id: userId, email: userData.email };
        } catch (error) {
            handleError(error as AxiosError);
        }
    },

    createRecipe: async (recipeData: {
        title: string;
        description: string;
        instructions: string;
        ingredients: string[];
        products: any[];
    }, userId: number) => {
        try {
            const { data } = await axiosInstance.post(
                '/recipes',
                recipeData,
                { headers: { 'user-id': userId.toString() } }
            );
            return data;
        } catch (error) {
            handleError(error as AxiosError);
        }
    }
};