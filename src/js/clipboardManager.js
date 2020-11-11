import ClipboardJS from 'clipboard';

export const clipboardManager = () => {

    const nameCopy = new ClipboardJS('#copyNameBtn', {
        text: () => {
            return document.querySelector('#nameRender h2').innerText;
        }
    });

    const ingredientsCopy = new ClipboardJS('#copyIngredientsBtn', {
        text: () => {
            return document.querySelector('#ingredientsRender').innerText;
        }
    });

    const stepsCopy = new ClipboardJS('#copyStepsBtn', {
        text: () => {
            return document.querySelector('#stepsRender').innerText;
        }
    });

    const recipeCopy = new ClipboardJS('#copyRecipeBtn', {
        text: () => {
            const ingredients = document.querySelector('#ingredientsRender').innerText;
            const steps = document.querySelector('#stepsRender').innerText;
            return ingredients + '\n\n' + steps;
        }
    });

    const toggleTooltip = tooltip => {
        tooltip.classList.add('tooltip--is-active');

        window.setTimeout(() => {
            tooltip.classList.remove('tooltip--is-active');
        }, 1500);
    };

    nameCopy.on('success', event => {
        toggleTooltip(event.trigger.nextElementSibling);
    });

    ingredientsCopy.on('success', event => {
        toggleTooltip(event.trigger.nextElementSibling);
    });

    stepsCopy.on('success', event => {
        toggleTooltip(event.trigger.nextElementSibling);
    });

    recipeCopy.on('success', event => {
        toggleTooltip(event.trigger.nextElementSibling);
    });
};
