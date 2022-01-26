class MainPage {

    getHeadingOnMainPage () {
        return cy.get('.ui.container h1').should('be.visible')
      }
}

export default MainPage