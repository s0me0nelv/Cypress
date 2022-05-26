describe('Create comment', () => {
    it('Multiple requests with POST Example', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments?_limit=1')
            .its('body')
            .its('0')
            .then((post) => {
                expect(post).property('postId').to.be.a('number')
                cy.request('POST', 'https://jsonplaceholder.cypress.io/comments', {
                    postId: post.postId,
                    title: 'New Laptop',
                    body:
                        'Hello everyone, I have bought new high performance laptop.',
                })
            }).then((response) => {
            expect(response).property('status').to.equal(201)
            expect(response.body).property('postId').to.be.a('number')
            expect(response.body).to.have.property('postId')
            expect(response.body).to.have.property('id')
        })
    })
});