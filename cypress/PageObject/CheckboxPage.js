
class CheckboxPage {
  checkCheckbox1(){
    this.checkbox1().check()
  }

  uncheckCheckbox2(){
    this.checkbox2().uncheck()
  }

  checkbox1(){
    return cy.get('[type="checkbox"]').first()
  }

  checkbox2(){
    return cy.get('[type="checkbox"]').last()
  }
}

export default CheckboxPage
