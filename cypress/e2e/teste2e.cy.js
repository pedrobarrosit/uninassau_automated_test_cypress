describe('home page da aplicação', () => {
    

    it('acessar home page', () => {
        cy.viewport(1440, 900) //resolução
        cy.visit('https://posdigital.uninassau.edu.br/') //exibir site

        cy.get('.wrapper > p > strong').should('have.text', 'Aproveite o desconto de final de ano: 20% OFF em todos os cursos. Cursos a partir de R$ 71,92/mês.')// texto do banner promocional
        cy.get('.actions__ctas > [href="https://posdigital.uninassau.edu.br/filtro-de-areas"]').click()// botão Montar Pós
        cy.get('.col--logo > #hs_cos_wrapper_site_logo > #hs_cos_wrapper_site_logo_hs_logo_widget >#hs-link-site_logo_hs_logo_widget > .hs-image-widget').click() // banner footer
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
        cy.get('._hj-ETLL8__MinimizedWidgetMiddle__label').click()

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

    it('página personalize seu curso', () => {

        cy.viewport(1440, 900)
        cy.visit('https://posdigital.uninassau.edu.br/')

        cy.get('.main-menu > :nth-child(2) > a').click()//filtro personalize seu curso
        cy.get(':nth-child(1) > .filter__item-label').click()//filtro da coluna
        cy.get(':nth-child(2) > .filter__item-label').click()
        cy.get(':nth-child(3) > .filter__item-label').click()
        cy.get(':nth-child(4) > .filter__item-label').click()
        cy.get(':nth-child(5) > .filter__item-label').click()
        cy.get(':nth-child(6) > .filter__item-label').click()
        cy.get(':nth-child(7) > .filter__item-label').click()
        cy.get(':nth-child(8) > .filter__item-label').click()
        cy.get(':nth-child(9) > .filter__item-label').click()
        cy.get('.load-more-btn').click()//botão carrega mais 
        cy.get(':nth-child(1) > .card__image').click()//card do curso
        cy.get(':nth-child(2) > .card__image').click()
        cy.get(':nth-child(3) > .card__image').click()
        cy.get('.filter-footer__enrollment-button-text').click()//botão flutuante seguir
        cy.get('.card__front > :nth-child(3) > .button').click()//botão checkout matricula-se

    });

    it('página de curso gratuito', () => {

        cy.viewport(1440, 900)
        cy.visit('https://posdigital.uninassau.edu.br/')

        cy.get('.main-menu > :nth-child(3) > a').click()//flitro página cursos gratuito
        cy.get('.swiper-slide-active > img').click()//card do curso
        cy.get('.open-form-fixed').click()//botão  inscreva-se
        cy.get('.modal-subscription').click()

    });
    it('página duvidas frequentes', () => {
        cy.viewport(1440, 900)
        cy.visit('https://posdigital.uninassau.edu.br/')

        cy.get('.main-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > label').click()
        cy.get(':nth-child(3) > label').click()
        cy.get(':nth-child(4) > label').click()
        cy.get(':nth-child(5) > label').click()

        cy.get('[style="transition: left 200ms ease 0s; left: 0px;"] > .questions-item__question > .item-question__title').click()
        cy.get('[style="transition: left 300ms ease 0s; left: 0px;"] > .questions-item__question > .item-question__title').click()
        cy.get('.faq-footer__contact > a').click()
        
        
    });


}); 