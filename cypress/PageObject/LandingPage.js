class LandingPage {
  logoutButton(){
    return cy.contains('Logout')
  }

  alert(){
    return cy.get('#flash')
  }
}

export default LandingPage
