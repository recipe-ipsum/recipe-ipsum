describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('Should generate recipe with no arguments', () => {
        cy.visit('/');

        cy.get('#genrateRecipeBtn').click();

        cy.get('#ingredientsRender ul').should('be.visible');
        cy.get('#stepsRender ol').should('be.visible');
    });

    it('Should generate recipe with a certain number of ingredients and steps', () => {
        cy.visit('/');

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
})
