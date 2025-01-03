import homePage from "../pages/homePage";

// Inicializa os contadores para o usuário e senha
let passwordCounter = 1;




function generateDynamicUser() {
    // Gera um número aleatório de 4 dígitos
    const randomNumber = Math.floor(10 + Math.random() * 90); // Gera números de 10 a 99
    return `UserADm${randomNumber}`;  // Nome de usuário dinâmico como UserADm1234, UserADm58, etc.
}

function generateDynamicPassword() {
    return `Password@${passwordCounter++}`; // Gera uma senha dinâmica como Password@1, Password@2, etc.
}

class CadastroPage {

    accessPage() {
        cy.visit('/');
        cy.wait(1000);
    }

    clickBtnUSer() {
        cy.get('[id="menuUser"]').click();
        cy.wait(1000);
    }

    createNewAccount() {
        cy.contains('CREATE NEW ACCOUNT').click();
        cy.wait(1000);
    }

    fillName() {
        const userName = generateDynamicUser(); // Gera o nome de usuário dinâmico com números aleatórios
        cy.get('[name="usernameRegisterPage"]').type(userName);
        cy.wait(1000);
        this.userName = userName; // Armazema o nome de usriadio para ser usada depois 
    }

    fillEmail() {
        const Email = "teste@teste.com.br"; // Mantém o email fixo ou também pode ser dinâmico
        cy.get('[name="emailRegisterPage"]').type(Email);
        cy.wait(1000);
    }

    fillPassword() {
        const passWord = generateDynamicPassword(); // Gera a senha dinâmica
        cy.get('[name="passwordRegisterPage"]').type(passWord);
        cy.wait(1000);
        this.passWord = passWord; // Armazena a senha para ser usada depois
    }

    confirmPassword() {
        const passWord = this.passWord; // Usa a mesma senha gerada
        cy.get('[name="confirm_passwordRegisterPage"]').type(passWord, { force: true });
        cy.wait(1000);
    }

    CheckBox() {
        cy.get('#formCover > sec-view > div > input').click();
        cy.wait(1000);
    }

    btnResister() {
        cy.wait(1000); // Adiciona uma espera para garantir que o botão esteja carregado
        cy.get('[id="register_btn"]').and('be.enabled').trigger('mouseover').click({ force: true });
        cy.wait(1000);
    }
    
}


export default new CadastroPage();