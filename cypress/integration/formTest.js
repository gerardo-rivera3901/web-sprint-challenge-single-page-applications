define('New Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const nameInput = () => cy.get('input[name=name]')
  const toppingInput = () => cy.get('input[type=checkbox]')
  const pizzaSizeInput = () => cy.get('select[name=pizzaSize]')
  const submitBtn = () => cy.get('button')

  it('Name Input Checker', () => {
    nameInput().type('Robert')
    nameInput().should('have.value', 'Robert')
  })

  it('Topping Input Checker', () => {
    toppingInput().click({multiple: true})
  })

  it('Form Submit Test', () => {
    nameInput().type('Robert')
    pizzaSizeInput().select('Small')
    toppingInput().click({multiple: true})
    submitBtn().click()
  })
})