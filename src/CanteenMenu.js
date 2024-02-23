import React from 'react';

const CanteenMenu = () => {
  const foodItems = [
    {
      name: 'Burger',
      description: 'A delicious beef burger with cheese, lettuce, and tomato.',
      price: '$5.99',
      photoUrl: '/burger.jpg', // Replace with actual photo URL
    },
    {
      name: 'Pizza',
      description: 'Authentic Italian pizza with your choice of toppings.',
      price: '$8.99',
      photoUrl: '/pizza.jpg', // Replace with actual photo URL
    },
    {
      name: 'Salad',
      description: 'Fresh garden salad with mixed greens and a variety of vegetables.',
      price: '$4.99',
      photoUrl: '/salad.jpg', // Replace with actual photo URL
    },
    {
      name: 'Smoothie',
      description: 'Refreshing fruit smoothie made with fresh berries and banana.',
      price: '$3.99',
      photoUrl: '/smoothie.jpg', // Replace with actual photo URL
    },
  ];

  return (
    <div className="canteen-menu text-center mt-8">
      <h2 className="text-3xl font-bold mb-8 text-purple-800">Canteen Menu</h2>
      <div className="menu-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((foodItem, index) => (
          <div key={index} className="menu-item bg-white rounded-lg shadow-md p-6">
            <img src={foodItem.photoUrl} alt={foodItem.name} className="w-full mb-4 rounded-lg shadow-md" />
            <h3 className="text-2xl font-bold mb-4 text-purple-900">{foodItem.name}</h3>
            <p className="text-lg text-gray-700 mb-6">{foodItem.description}</p>
            <p className="text-xl font-bold text-purple-800">{foodItem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanteenMenu;
