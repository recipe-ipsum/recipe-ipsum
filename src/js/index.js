/* TODO make a more 'realistic' version
*  - limits on measurements
*  - different arrays for different types of ingredients
*  - Logical steps like beginning, middle, end, maybe not a choice of steps and go according to num of ingredients
*  - every ingredient must be used at least once in the steps
* */
import * as lists from './words';
import {decimalToFraction, capitalizeChars} from './utils';
import {clipboardManager} from './clipboardManager';

const form = document.getElementById('generateRecipeForm');
const customizeConfigBtn = document.getElementById('customizeConfigBtn');
const config = document.getElementById('config');
const nbIngredientsInput = document.getElementById('nbIngredients');
const nbStepsInput = document.getElementById('nbSteps');
const seriousModeInput = document.getElementById('seriousMode');

const nameRenderElem = document.getElementById('nameRender');
const ingredientsRenderElem = document.getElementById('ingredientsRender');
const stepsRenderElem = document.getElementById('stepsRender');
const recipeHeading = document.createElement('h2');
const ingredientsHtmlList = document.createElement('ul');
const stepsHtmlList = document.createElement('ol');
stepsHtmlList.className = 'recipe__steps';

nbIngredientsInput.setAttribute('max', lists.ingredients.length.toString());
nbStepsInput.setAttribute('max', lists.directions.length.toString());

const generateRecipe = (event) => {
    event.preventDefault();
    recipeHeading.innerHTML = '';
    ingredientsHtmlList.innerHTML = '';
    stepsHtmlList.innerHTML = '';
    const isSeriousMode = seriousModeInput.checked;

    const nbIngredients = parseInt(nbIngredientsInput.value, 10) || Math.floor((Math.random() * 10) + (isSeriousMode ? 3 : 1));
    const nbSteps = parseInt(nbStepsInput.value, 10) || Math.floor((Math.random() * 5) + (isSeriousMode ? 2 : 1));

    const ingredients = generateIngredients(nbIngredients, isSeriousMode);
    const recipeName = generateRecipeName(ingredients);
    const steps = generateSteps(nbSteps, ingredients, isSeriousMode);

    ingredients.forEach(ingredient => {
        ingredientsHtmlList.innerHTML += `<li>${ingredient.amount} of ${ingredient.ingredient.name}</li>`;
    });

    for (let i = 0; i < nbSteps; i ++){
        stepsHtmlList.innerHTML += `<li><span>${i + 1}.<span> ${steps[i]}</li>`;
    }

    if (recipeName === '') {
        nameRenderElem.classList.add('hidden');
    } else {
        nameRenderElem.classList.remove('hidden');
        recipeHeading.innerHTML = recipeName;
        nameRenderElem.querySelector('.recipe__header').prepend(recipeHeading);
    }

    ingredientsRenderElem.appendChild(ingredientsHtmlList);
    stepsRenderElem.appendChild(stepsHtmlList);
    document.querySelector('.recipe').classList.remove('hidden');
};

const generateIngredients = (nbIngredients, isSeriousMode) => {
    let ingredients = [];
    let ingredientListCopy = [...lists.ingredients];
    const chosenIngredientTypes = {};

    for (let i = 0; i < nbIngredients; i++) {
        const randomMeasurement = generateMeasurement(lists.decimals.random());
        let randomMeasurementType = lists.measurements.random();
        let ingredientIndex = -1;
        let randomIngredient;

        randomMeasurementType = (typeof randomMeasurement === 'number' && randomMeasurement > 1)
            || (typeof randomMeasurement === 'string' && randomMeasurement.includes(' '))
            ? randomMeasurementType + 's'
            : randomMeasurementType;

        if (!ingredientListCopy.length) {
            ingredientListCopy = [...lists.ingredients];
        }

        if (isSeriousMode) {
            randomIngredient = ingredientListCopy.shuffle().find(({ type }, index) => {
                if (!chosenIngredientTypes[type]) {
                    chosenIngredientTypes[type] = true;
                    ingredientIndex = index;

                    return true;
                }

                return false;
            });
        }

        if (ingredientIndex === -1) {
            randomIngredient = ingredientListCopy.random();
            ingredientIndex = ingredientListCopy.indexOf(randomIngredient);
        }

        if (ingredientIndex > -1) {
            ingredientListCopy.splice(ingredientIndex, 1);
        }

        ingredients.push({
            amount: convertMeasurement(`${randomMeasurement} ${randomMeasurementType}`),
            ingredient: randomIngredient
        });
    }

    return ingredients.shuffle();
};

const convertMeasurement = (measurement) => {
    // TODO Optimize this process
    if (measurement === '3 teaspoons') {
        return '1 tablespoon';
    } else if (measurement === '4 tablespoons' || measurement === '12 teaspoons') {
        return '1/4 cup';
    } else if (measurement === '16 tablespoons') {
        return '1 cup';
    } else if (measurement === '2 cups') {
        return '1 pint';
    } else if (measurement === '2 pints' || measurement === '4 cups') {
        return '1 quart';
    } else {
        return measurement;
    }
};

const generateMeasurement = measurement => {
    let newMeasurement = measurement;
    let randomInt = Math.floor((Math.random() * 5) + 1);
    let fraction = decimalToFraction(measurement);

    // This makes it to have whole numbers with fractions like 2 1/2 cups of milk
    if (Math.floor(Math.random() * 2) === 0) {
        newMeasurement = measurement === 0 ? randomInt : fraction;
    } else {
        newMeasurement = measurement === 0 ? randomInt  : `${randomInt.toString()} <sup>${fraction}</sup>`;
    }

    return newMeasurement;
};

const generateSteps = (nbSteps, ingredients, isSeriousMode) => {
    const steps = [];
    const stepListCopy = [...lists.directions];
    let notUsedIngredients = generateIngredientsNames(ingredients);
    const stepCountForEachPosition = Math.ceil(nbSteps / Object.entries(lists.stepPositions).length);
    const stepPositions = Object.values(lists.stepPositions);
    let positionPointer = 0;
    let counter = 0;

    for (let i = 0; i < nbSteps; i++) {
        let stepIndex = -1;
        let randomStep;

        if (isSeriousMode) {
            randomStep = stepListCopy.shuffle().find(({ position }, index) => {
                if (position !== stepPositions[positionPointer]) {
                    return false;
                }

                if (counter === stepCountForEachPosition) {
                    positionPointer += 1;
                    counter = 0;

                    return false;
                }

                counter += 1;
                stepIndex = index;

                return true;
            });
        }

        if (stepIndex === -1) {
            randomStep = stepListCopy.random();
            stepIndex = stepListCopy.indexOf(text);
        }

        if (stepIndex > -1) {
            stepListCopy.splice(stepIndex, 1);
        }

        let { text } = randomStep;

        if (text.includes('{ingredient}')) {
            const count = (text.match(/\{ingredient\}/g)).length;
            let usedIngredients;

            if (notUsedIngredients.length <= count){
                notUsedIngredients = generateIngredientsNames(ingredients);
            }

            usedIngredients = notUsedIngredients.splice(0, count);
            text = replaceIngredientPlaceholder(text, usedIngredients);
        }

        steps.push(text);
    }

    return steps;
};

const generateIngredientsNames = (ingredients) => {
    return ingredients.shuffle().map((ingredient) => {
        return ingredient.ingredient.name;
    });
};

const generateRecipeName = (ingredients) => {
    const {verbsAndAdjectives, recipeTypes, ingredientTypes} = lists;
    let ingredientsCopy = [...ingredients];
    let recipeName = '';

    ingredientsCopy = ingredientsCopy.filter(({ ingredient }) =>
        ingredient.type !== ingredientTypes.spice &&
        ingredient.type !== ingredientTypes.condiment &&
        ingredient.type !== ingredientTypes.herb &&
        ingredient.type !== ingredientTypes.fat &&
        ingredient.type !== ingredientTypes.nonDairy &&
        ingredient.type !== ingredientTypes.bakingSupply
    );

    if (ingredientsCopy.length > 0) {
        let ingredient = ingredientsCopy.random();
        recipeName = `${verbsAndAdjectives.random()} ${capitalizeChars(ingredient.ingredient.name)} ${recipeTypes.random()}`;
    }

    return recipeName;
};

const replaceIngredientPlaceholder = (step, usedIngredients) => {
    const split = step.split(' ');
    for (let i = 0; i < split.length; i++) {
        if (split[i].includes('{ingredient}')) {
            let ingredient = usedIngredients.pop();
            split[i] = split[i].replace(/{ingredient}/, ingredient);
        }
    }

    return split.join(' ');
};

const checkForDuplicates = () => {
    const valueArr = lists.ingredients.map(function(item){ return item.name; });
    const isDuplicate = valueArr.some(function(item, index){
        return valueArr.indexOf(item) !== index;
    });

    if (isDuplicate) {
        alert('There is a duplicate in the ingredients array, please remove it');
    }
};

checkForDuplicates();
clipboardManager();
form.addEventListener('submit', generateRecipe);
customizeConfigBtn.addEventListener('click', () => {
    config.classList.toggle('hidden');
});
