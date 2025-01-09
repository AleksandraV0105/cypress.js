describe('Проверка авторизации', function () {

    it('Верный логин и верный логин', function () {
         cy.visit('https://login.qa.studio/');//Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru');//ВВели верный логин
         cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
         cy.get('#loginButton').click();//нажать войти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после автрозации вижу текст
         cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

     })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru');//ВВели верный логин
        cy.get('#pass').type('iLoveqastudio7');//Ввели неверный пароль
        cy.get('#loginButton').click();//нажать войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после автрозации вижу текст
        cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })
 
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru');//ВВели логин без @
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//нажать войти 

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после автрозации вижу текст
        cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })
 
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

       
        cy.get('#forgotEmailButton').click();//нажать восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru')//Ввести почту для восстановления
        cy.get('#restoreEmailButton').click();//нажать отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })

    it('Неверный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikova.ru');//ВВели неверный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//нажать войти 

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после автрозации вижу текст
        cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяем цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru');//ВВели  логин
        cy.get('#pass').type('iLoveqastudio1');//Ввели верный пароль
        cy.get('#loginButton').click();//нажать войти 

        cy.get('#messageHeader').contains('Авторизация прошла успешна'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible')//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя

    })
 
      
 })
 
 

 