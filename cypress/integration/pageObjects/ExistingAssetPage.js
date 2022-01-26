class ExistingAssetPage {

    getExistingAssetBtn () {
        return cy.get('.ui a:nth-child(3)').should('be.visible')
      }

    getSearchField () {
        return cy.get('.ui input[type="text"]').should('be.visible')
    }

    getSortingRows () {
        return cy.get('thead:nth-child(1) tr:nth-child(1)').should('be.visible')
    }

    getSearchedAssetName () {
        return cy.get('.ui td').should('be.visible')
    }

    getResultCount () {
        return cy.get('.ui .dataTables_info').should('be.visible')
    }
}

export default ExistingAssetPage

