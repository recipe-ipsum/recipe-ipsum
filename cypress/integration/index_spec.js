describe('The Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Should generate recipe with no arguments', () => {
        cy.get('#genrateRecipeBtn').click();

        cy.get('#ingredientsRender ul').should('be.visible');
        cy.get('#stepsRender ol').should('be.visible');
    });

    it('Should generate recipe with a certain number of ingredients and steps', () => {
        cy.get('details').click();
        cy.get('#nbIngredients').type('5');
        cy.get('#nbSteps').type('8');

        cy.get('#genrateRecipeBtn').click();

        cy.get('#ingredientsRender ul').should('be.visible');
        cy.get('#ingredientsRender ul li').should(($li) => {
            expect($li).to.have.length(5)
        });
        cy.get('#stepsRender ol').should('be.visible');
        cy.get('#stepsRender ol li').should(($li) => {
            expect($li).to.have.length(8)
        });
    });

    it('Should copy ingredients', () => {
        cy.get('#genrateRecipeBtn').click();

        cy.get('#copyIngredientsBtn').click();
        cy.get('#copyIngredientsBtn + span.tooltip').should('be.visible');
    });

    it('Should copy directions', () => {
        cy.get('#genrateRecipeBtn').click();

        cy.get('#copyStepsBtn').click();
        cy.get('#copyStepsBtn + span.tooltip').should('be.visible');
    });

    it('Should copy recipe', () => {
        cy.get('#genrateRecipeBtn').click();

        cy.get('#copyRecipeBtn').click();
        cy.get('#copyRecipeBtn + span.tooltip').should('be.visible');
    });
});
