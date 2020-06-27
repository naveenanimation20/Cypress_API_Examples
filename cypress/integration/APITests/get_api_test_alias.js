
describe('API testing with Alias', () =>{

    beforeEach(()=>{
        cy.request('/users?page=2').as('users')
    })

    it('validate the header info', () => {
        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });

    it('validate the status code', () => {
        cy.get('@users')
            .its('status')
            .should('equal', 200)
    });

    it('validate the total pages in body', () => {
        cy.get('@users')
            .its('body')
            .should('contains', {'total_pages': 2})
    });

    it('validate the user info in data json array', () => {
        cy.get('@users')
            .its('body').then((res)=>{
                expect(res.data[0]).has.property('first_name', 'Michael')
            })
    });



})
    
    