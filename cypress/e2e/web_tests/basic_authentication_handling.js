import BasicAuthPage from "../../PageObject/BasicAuthPage"

const basicauth_page=new BasicAuthPage()

describe("Basic Authentication Functionality",function(){
  beforeEach(function(){
    cy.fixture("basicauthdata").then(function(testdata){
      this.testdata=testdata;
    })
  })

  it("verify successfull login", function(){
    let message
    basicauth_page.navigate(this.testdata.authurl, this.testdata.username, this.testdata.password)
    basicauth_page.getMessage().then(function(el){
      message=el.text()
      message=message.trim()
      expect(message).to.equal(this.testdata.successmessage);
    })
  })
 })
