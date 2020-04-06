/* TODO make a more 'realistic' version
*  - limits on measurements
*  - different arrays for different types of ingredients
*  - Logical steps like beginning, middle, end, maybe not a choice of steps and go according to num of ingredients
*  - every ingredient must be used at least once in the steps
* */

import {measurementDecimals, measurementNames, ingredientList, stepList} from "./words";
import decimalToFraction from "./fraction";

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
};

const form = document.getElementById('genrateRecipeForm');
const nbIngredientsInput = document.getElementById('nbIngredients');
const nbStepsInput = document.getElementById('nbSteps');

const ingredientsRenderElem = document.getElementById('ingredientsRender');
const stepsRenderElem = document.getElementById('stepsRender');
const ingredientsHtmlList = document.createElement('ul');
const stepsHtmlList = document.createElement('ol');
// const formatButtonsContainer = document.querySelector('.format-ctn');

nbIngredientsInput.setAttribute('max', ingredientList.length.toString());
nbStepsInput.setAttribute('max', stepList.length.toString());

const generateRecipe = (event) => {
    event.preventDefault();
    ingredientsHtmlList.innerHTML = '';
    stepsHtmlList.innerHTML = '';

    const nbIngredients = parseInt(nbIngredientsInput.value, 10) || Math.floor((Math.random() * 10) + 1);
    const nbSteps = parseInt(nbStepsInput.value, 10) || Math.floor((Math.random() * 5) + 1);

    const ingredients = generateIngredients(nbIngredients);
    const steps = generateSteps(nbSteps, ingredients);

    ingredients.forEach(ingredient => {
        ingredientsHtmlList.innerHTML += `<li>${ingredient.amount} of ${ingredient.ingredient}</li>`
    });

    steps.forEach(step => {
        stepsHtmlList.innerHTML += `<li>${step}</li>`
    });

    // formatButtonsContainer.classList.remove('hidden');
    ingredientsRenderElem.appendChild(ingredientsHtmlList);
    stepsRenderElem.appendChild(stepsHtmlList);
};

const generateIngredients = (nbIngredients) => {
    let ingredients = [];
    let ingredientListCopy = [...ingredientList];
    for (let i = 0; i < nbIngredients; i++) {
        const randomMeasurement = generateMeasurement(measurementDecimals.random());
        let randomMeasurementType = measurementNames.random();
        randomMeasurementType = typeof randomMeasurement === 'number' && randomMeasurement > 1 ? randomMeasurementType + 's' : randomMeasurementType;
        let randomIngredient = ingredientListCopy.random();
        let ingredientIndex = ingredientListCopy.indexOf(randomIngredient);
        if (ingredientIndex > -1) {
            ingredientListCopy.splice(ingredientIndex, 1);
        }

        ingredients.push({
            amount: `${randomMeasurement} ${randomMeasurementType}`,
            ingredient: randomIngredient
        });
    }

    return ingredients;
};

const generateMeasurement = measurement => {
    return measurement === 0 ? Math.floor((Math.random() * 5) + 1) : decimalToFraction(measurement);
};

const generateSteps = (nbSteps, ingredients) => {
    const steps = [];
    const stepListCopy = [...stepList];

    for (let i = 0; i < nbSteps; i++) {
        let randomStep = stepListCopy.random();
        const stepIndex = stepListCopy.indexOf(randomStep);

        if (stepIndex > -1) {
            stepListCopy.splice(stepIndex, 1);
        }

        if (randomStep.includes('{ingredient}')) {
            const split = randomStep.split(' ');
            for (let i = 0; i < split.length; i++) {
                if (split[i].includes('{ingredient}')) {
                    split[i] = split[i].replace(/{ingredient}/, ingredients.random().ingredient);
                }
            }

            randomStep = split.join(' ')
        }

        steps.push(randomStep)
    }

    return steps;
};

form.addEventListener('submit', generateRecipe);
