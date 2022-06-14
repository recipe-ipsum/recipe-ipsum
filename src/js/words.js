export const ingredientTypes = {
    spice: 'spice',
    herb: 'herb',
    carbs: 'carbs',
    nonDairy: 'nonDairy',
    protein: 'protein',
    fat: 'fat',
    fruit: 'fruit',
    vegetable: 'vegetable',
    condiment: 'condiment',
    nut: 'nut',
    fungi: 'fungi',
    bakingSupply: 'bakingSupply'
};

export const stepPositions = {
    start: 'start',
    middle: 'middle',
    end: 'end',
};

const {
    spice,
    herb,
    carbs,
    nonDairy,
    protein,
    fat,
    fruit,
    vegetable,
    condiment,
    nut,
    fungi,
    bakingSupply,
} = ingredientTypes;

const {
    start,
    middle,
    end,
} = stepPositions;

export const decimals = [
    0, 0.25, 0.5, 0.3, 0.8, 0.75
];

export const measurements = [
    'teaspoon',
    'tablespoon',
    'cup',
    'lb',
    'pint',
    'quart',
    'fluid ounce',
    'gallon',
    'ml',
    'litre',
    'pound',
    'kilogram',
    'gram',
];

export const ingredients = [
    { name: 'salt', type: spice },
    { name: 'red chili flakes', type: spice },
    { name: 'pepper', type: spice },
    { name: 'paprika', type: spice },
    { name: 'oregano', type: herb },
    { name: 'tumeric', type: spice },
    { name: 'cayenne pepper', type: spice },
    { name: 'thyme', type: herb },
    { name: 'cinnamon', type: spice },
    { name: 'sugar', type: spice },
    { name: 'pasta', type: carbs },
    { name: 'rice', type: carbs },
    { name: 'couscous', type: carbs },
    { name: 'quinoa', type: carbs },
    { name: 'flour', type: bakingSupply },
    { name: 'baking powder', type: bakingSupply },
    { name: 'oat milk', type: nonDairy },
    { name: 'vegan butter', type: nonDairy },
    { name: 'olive oil', type: fat },
    { name: 'apple', type: fruit },
    { name: 'asparagus', type: vegetable },
    { name: 'vegan cheese', type: nonDairy },
    { name: 'orange', type: fruit },
    { name: 'zucchini', type: vegetable },
    { name: 'sesame seeds', type: fat },
    { name: 'carrots', type: vegetable },
    { name: 'celery', type: vegetable },
    { name: 'ketchup', type: condiment },
    { name: 'mayonnaise', type: condiment },
    { name: 'vinegar', type: condiment },
    { name: 'mustard', type: condiment },
    { name: 'maple syrup', type: condiment },
    { name: 'garlic', type: vegetable },
    { name: 'shallot', type: vegetable },
    { name: 'onion', type: vegetable },
    { name: 'potato', type: vegetable },
    { name: 'tomato', type: fruit },
    { name: 'soy sauce', type: condiment },
    { name: 'hot sauce', type: condiment },
    { name: 'lentils', type: vegetable },
    { name: 'black beans', type: vegetable },
    { name: 'mixed beans', type: vegetable },
    { name: 'kidney beans', type: vegetable },
    { name: 'chickpeas', type: vegetable },
    { name: 'lima beans', type: vegetable },
    { name: 'pinto beans', type: vegetable },
    { name: 'cornstarch', type: bakingSupply },
    { name: 'plain oat yogurt', type: nonDairy },
    { name: 'oats', type: carbs },
    { name: 'edamame', type: vegetable },
    { name: 'rolled oats', type: carbs },
    { name: 'parsley', type: herb },
    { name: 'chestnuts', type: nut },
    { name: 'kiwi', type: fruit },
    { name: 'banana', type: fruit },
    { name: 'coriander', type: herb },
    { name: 'vegan feta', type: nonDairy },
    { name: 'rosemary', type: herb },
    { name: 'basil', type: herb },
    { name: 'baking soda', type: carbs },
    { name: 'brown sugar', type: spice },
    { name: 'tofu', type: protein },
    { name: 'tempeh', type: protein },
    { name: 'seitan', type: protein },
    { name: 'soy curls', type: protein },
    { name: 'bulgur', type: carbs },
    { name: 'soba noodles', type: carbs },
    { name: 'chia seeds', type: fat },
    { name: 'hemp hearts', type: vegetable },
    { name: 'flax seeds', type: fat },
    { name: 'hazelnuts', type: nut },
    { name: 'peanuts', type: nut },
    { name: 'brazil nuts', type: nut },
    { name: 'strawberries', type: fruit },
    { name: 'blueberries', type: fruit },
    { name: 'pine nuts', type: nut },
    { name: 'kale', type: vegetable },
    { name: 'tahini', type: fat },
    { name: 'artichoke', type: vegetable },
    { name: 'eggplant', type: vegetable },
    { name: 'okra', type: vegetable },
    { name: 'pumpkin', type: vegetable },
    { name: 'avocado', type: fruit },
    { name: 'peppercorn', type: spice },
    { name: 'mustard seed', type: spice },
    { name: 'dill', type: herb },
    { name: 'fennel seeds', type: spice },
    { name: 'nutmeg', type: spice },
    { name: 'bay leaves', type: spice },
    { name: 'bread crumbs', type: carbs },
    { name: 'yeast', type: bakingSupply },
    { name: 'lemon', type: fruit },
    { name: 'lime', type: fruit },
    { name: 'raspberries', type: fruit },
    { name: 'canola oil', type: fat },
    { name: 'blackberries', type: fruit },
    { name: 'chimichurri', type: condiment },
    { name: 'chilli pepper', type: spice },
    { name: 'shiitake', type: fungi },
    { name: 'spinach', type: vegetable },
    { name: 'chive', type: herb },
    { name: 'mint', type: herb },
    { name: 'watermelon', type: fruit },
    { name: 'coconut oil', type: fat },
    { name: 'peanut butter', type: fat },
    { name: 'condensed coconut milk', type: nonDairy },
    { name: 'oat cream', type: nonDairy },
    { name: 'corn', type: vegetable },
    { name: 'sweet potato', type: vegetable },
    { name: 'squash', type: vegetable },
    { name: 'brussel sprouts', type: vegetable },
    { name: 'scallions', type: vegetable },
    { name: 'mango', type: fruit },
    { name: 'peach', type: fruit },
    { name: 'teriyaki sauce', type: condiment },
    { name: 'hoisin sauce', type: condiment },
    { name: 'mushroom', type: fungi },
    { name: 'salsa verde', type: condiment },
    { name: 'bay leaf', type: herb },
    { name: 'almonds', type: nut },
    { name: 'pecans', type: nut },
    { name: 'walnuts', type: nut },
    { name: 'soy milk', type: nonDairy},
    { name: 'almond milk', type: nonDairy},
];

export const directions = [{ 
    text: 'Stir in the {ingredient} with the rest of the ingredients.',
    position: middle, 
}, { 
    text: 'Cook on high heat until browned and fragrant.',
    position: end, 
}, { 
    text: 'Let sit for 10 minutes before serving.',
    position: end, 
}, { 
    text: 'Preheat oven to 375°F.',
    position: start, 
}, { 
    text: 'Line baking sheet with foil.',
    position: start, 
}, { 
    text: 'Place {ingredient} in bowl and season with {ingredient} and {ingredient}, Toss with rubber spatula to thoroughly coat {ingredient} with oil and seasonings.',
    position: middle, 
}, { 
    text: 'Arrange {ingredient} on baking sheet.',
    position: start, 
}, { 
    text: 'Roast {ingredient} on middle rack of oven until it is slightly brown, 20-30 minutes.',
    position: middle, 
}, { 
    text: 'Check to see that {ingredient} is done. Remove from oven or add time as needed.',
    position: end, 
}, { 
    text: 'Transfer to a plate and serve immediately.',
    position: end, 
}, { 
    text: 'Blend the {ingredient} and {ingredient} in a food processor for a few seconds, until the mixture looks like breadcrumbs.',
    position: start, 
}, { 
    text: 'Stir in the {ingredient} and the {ingredient} and sprinkle over the cooked {ingredient} in the pie dish. Transfer to the oven to bake for 30 minutes or until crisp and golden-brown on top.',
    position: middle, 
}, { 
    text: 'In a large pot over medium high heat, add the {ingredient}, {ingredient}, {ingredient}, and {ingredient}. Sauté until tender 4-5 minutes. Add the {ingredient}, {ingredient}, and {ingredient} and {ingredient} and {ingredient} for 1 minute more.',
    position: middle, 
}, { 
    text: 'Bake the {ingredient} in a preheated 200°F oven for 20 minutes until they are soft. Remove from oven and once cool enough to handle, peel.',
    position: middle, 
}, { 
    text: 'Store it in an airtight container and freeze it for up to 6 months.',
    position: end, 
}, { 
    text: 'Adjust the flavorings and add the {ingredient} if the {ingredient} is too acidic.',
    position: end, 
}, { 
    text: 'Check occasionally and add a bit of {ingredient}, if you need to.',
    position: middle, 
}, { 
    text: 'Stir in fresh {ingredient} and serve the {ingredient} over {ingredient}.',
    position: end, 
}, { 
    text: 'Mix the first two ingredients in a large bowl.',
    position: start, 
}, { 
    text: 'Grease the pan with butter.',
    position: start, 
}, { 
    text: 'In a small bowl, mix together the {ingredient} and {ingredient}.',
    position: start, 
}, { 
    text: 'Use an electric mixer to mix the {ingredient}, {ingredient} and {ingredient}.',
    position: start, 
}, { 
    text: 'Put the {ingredient}, {ingredient} and {ingredient} in your food processor and chop to a pulp.',
    position: start, 
}, { 
    text: 'Boil {ingredient} for 10 minutes.',
    position: middle, 
}, { 
    text: 'Cook {ingredient} in water bath for 40-50 minutes.',
    position: middle, 
}, { 
    text: 'Fry {ingredient} until golden brown.',
    position: middle, 
}, { 
    text: 'Preheat the oven.',
    position: start, 
}, { 
    text: 'Combine the {ingredient}, {ingredient}, {ingredient} and {ingredient} in a pot and place over medium heat.',
    position: middle, 
}, { 
    text: 'Bring to a simmer while stirring with a whisk.',
    position: middle, 
}, { 
    text: 'As soon as the {ingredient} begins to bubble on the sides of the pot, remove from heat, and set aside for use.',
    position: middle, 
}, { 
    text: 'Drop by tablespoonfuls onto {ingredient} sheets.',
    position: start, 
}, { 
    text: 'Reduce heat to low.',
    position: middle, 
}, { 
    text: 'Blend {ingredient} into {ingredient}.',
    position: start, 
}, { 
    text: 'Season with {ingredient}.',
    position: end, 
}, { 
    text: 'Heat oil in a deep-fryer or large saucepan to 350 degrees F (175 degrees C).',
    position: start, 
}];
 

export const verbsAndAdjectives = [
    'Roasted',
    'Baked',
    'Fried',
    'Spicy',
    'Delicious',
    'Creamy',
    'Juicy',
    'Easy',
    'Healthy',
    'High Protein',
    'One-Pot',
    '30 Minute'
];

export const recipeTypes = [
    'Cake',
    'Pie',
    'Roast',
    'Nourrish Bowl',
    'Pizza',
    'Tacos',
    'Burrito',
    'Risotto',
    'Nuggets',
    'Salad',
    'Casserole',
    'Burger',
    'Chili',
    'Sandwich',
    'Curry',
    'Wrap'
];
