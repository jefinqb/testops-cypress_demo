class AlertPage { 
  firstAlertButton(){
    return cy.get('button[onclick="jsAlert()"]').first()
  }

  secondAlertButton(){
    return cy.get('button[onclick="jsConfirm()"]')
  }

  alertResult(){
    return cy.get('#result')
  }
  
  clickJSAlert(alertContent){
    this.firstAlertButton().click()
  }

  clickJSConfirmAndCancels(alertContent){
    this.secondAlertButton().click() 
  }

  clickJSPrmpt(message){
    cy.window().then(function($win){
      cy.stub($win,'prompt').returns(message)
      cy.get('button[onclick="jsPrompt()"]').click()
    })
   }
  }

export default AlertPage
