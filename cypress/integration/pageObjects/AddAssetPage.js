class AddAssetPage {

    getAddAssetBtn () {
        return cy.get('.ui a:nth-child(2)').should('be.visible')
      }

    getNewAssetField () {
        return cy.get('#defaultFormAddAsset').should('be.visible')
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]').should('be.visible')
    }

    getModalTitle () {
        return cy.get('.modal-content .modal-title')
    }

    getModalMessage () {
        return cy.get('.modal-content .modal-body').should('be.visible')
    }

    getCloseBtnOnModal () {
        return cy.get('.modal-content button:nth-child(1)').should('be.visible')
    }
}

export default AddAssetPage

