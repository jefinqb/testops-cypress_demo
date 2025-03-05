import LoginPage from "../../PageObject/LoginPage"

describe('Login feature', () => {
  context('login with valid credentials', () => {
    let userDetails

    before(() => {
      cy.fixture('logindetails.json').then((data) => {
        userDetails = data;
      })
    })

    it('login should be successful', () => {
      const login_page = new LoginPage();
      login_page.visit();
      const landing_page = login_page.login(userDetails.username, userDetails.password)

      landing_page.logoutButton().should('be.visible')
      landing_page.alert().should('include.text',"You logged into a secure area!")
    })
  })
})
