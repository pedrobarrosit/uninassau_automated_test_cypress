describe('home page da aplicação', () => {

    it('acessar home page', () => {
        cy.viewport(1440, 900) //resolução
        cy.visit('https://posdigital.uninassau.edu.br/') //exibir site

        cy.get('.wrapper > p > strong').should('have.text', 'Aproveite o desconto de final de ano: 20% OFF em todos os cursos. Cursos a partir de R$ 71,92/mês.')// texto do banner promocional
        cy.get('.actions__ctas > [href="https://posdigital.uninassau.edu.br/filtro-de-areas"]').click()// botão Montar Pós
        cy.get('.col--logo > #hs_cos_wrapper_site_logo > #hs_cos_wrapper_site_logo_hs_logo_widget > #hs-link-site_logo_hs_logo_widget > .hs-image-widget').click() // banner footer

        cy.get('[href="#courses"]').click()// botão ver pós mba e sugeridos
        cy.get('.categories__list > :nth-child(1) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get('.categories__list > :nth-child(2) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get('.categories__list > :nth-child(3) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get('.categories__list > :nth-child(4) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get('.categories__list > :nth-child(5) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get(':nth-child(6) > label').click()// filtro do carrosel pós_mba sugeridos
        cy.get(':nth-child(7) > label').click()// filtro do carrosel pós_mba sugeridos

        cy.get('.courses-section__course > .button').click() //botão escolhar banner personalize agora seu curso
        cy.get('.col--logo > #hs_cos_wrapper_site_logo > #hs_cos_wrapper_site_logo_hs_logo_widget > #hs-link-site_logo_hs_logo_widget > .hs-image-widget').click() // banner footer
    });
    it('página pós e mba sugeridos', () => {
        cy.viewport(1440, 900)
        cy.visit('https://posdigital.uninassau.edu.br/')

        cy.get('.main-menu > :nth-child(1) > a').click()
        cy.get('.types__list > :nth-child(1) > label').click()//filtro pós_graduação modal preferencia
        cy.get('.types__list > :nth-child(1) > label').click()
        cy.get('.types__list > :nth-child(2) > label').click()//filtro mba modal preferencia
        cy.get('.types__list > :nth-child(2) > label').click()
        cy.get('.main__more').click()//botão carrega mais dos cards
    });
}); 