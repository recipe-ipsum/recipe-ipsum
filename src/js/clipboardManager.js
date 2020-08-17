import ClipboardJS from "clipboard";

export const clipboardManager = () => {

    const ingredientsCopy = new ClipboardJS('#copyIngredientsBtn', {
        text: (trigger) => {
            return document.querySelector('#ingredientsRender').innerText;
        }
    });

    const stepsCopy = new ClipboardJS('#copyStepsBtn', {
        text: (trigger) => {
            return document.querySelector('#stepsRender').innerText;
        }
    });

    const recipeCopy = new ClipboardJS('#copyRecipeBtn', {
        text: (trigger) => {
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
