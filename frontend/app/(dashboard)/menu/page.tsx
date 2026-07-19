'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Meal {
  _id: string;
  name: string;
  description: string;
  price: number;
  mealType: string;
  availability: number;
  image?: string;
}

const MenuPage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchMeals();
  }, [filter]);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? `${process.env.NEXT_PUBLIC_API_URL}/meals`
        : `${process.env.NEXT_PUBLIC_API_URL}/meals?mealType=${filter}`;
      
      const response = await axios.get(url);
      setMeals(response.data.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  const mealTypes = ['all', 'breakfast', 'lunch', 'dinner'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">🍽️ Today's Menu</h1>

      {/* Filter */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {mealTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === type
                ? 'bg-gradient-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Meals Grid */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Loading meals...</p>
        </div>
      ) : meals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No meals available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <motion.div
              key={meal._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:shadow-2xl cursor-pointer"
            >
              {meal.image && (
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 inline-block px-3 py-1 rounded-full text-sm mb-2">
                {meal.mealType}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {meal.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {meal.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">₹{meal.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {meal.availability > 0 ? `${meal.availability} available` : 'Sold out'}
                </span>
              </div>
              <button
                disabled={meal.availability === 0}
                className="w-full mt-4 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MenuPage;
