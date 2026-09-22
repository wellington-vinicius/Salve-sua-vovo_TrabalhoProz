const formularioCadastro =
    document.getElementById("form-cadastro");

const campoNome =
    document.getElementById("nome-cadastro");

const campoEmail =
    document.getElementById("email-cadastro");

const campoSenha =
    document.getElementById("senha-cadastro");

const campoConfirmarSenha =
    document.getElementById("confirmar-senha");

const checkboxTermos =
    document.getElementById("aceitar-termos");

const mensagemCadastro =
    document.getElementById("mensagem-cadastro");


formularioCadastro.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        limparErros();


        const nome =
            campoNome.value.trim();

        const email =
            campoEmail.value.trim();

        const senha =
            campoSenha.value;

        const confirmarSenha =
            campoConfirmarSenha.value;


        let formularioValido = true;


        // ==========================
        // VALIDAR NOME
        // ==========================

        if (nome.length < 3) {

            document.getElementById("erro-nome")
                .textContent =
                "Digite um nome válido.";

            formularioValido = false;
        }


        // ==========================
        // VALIDAR E-MAIL
        // ==========================

        if (!email.includes("@")) {

            document.getElementById("erro-email")
                .textContent =
                "Digite um e-mail válido.";

            formularioValido = false;
        }


        // ==========================
        // VALIDAR SENHA
        // ==========================

        if (senha.length < 6) {

            document.getElementById("erro-senha")
                .textContent =
                "A senha precisa ter pelo menos 6 caracteres.";

            formularioValido = false;
        }


        // ==========================
        // CONFIRMAR SENHA
        // ==========================

        if (senha !== confirmarSenha) {

            document.getElementById(
                "erro-confirmar-senha"
            ).textContent =
                "As senhas não são iguais.";

            formularioValido = false;
        }


        // ==========================
        // TERMOS
        // ==========================

        if (!checkboxTermos.checked) {

            mensagemCadastro.style.color =
                "#c62828";

            mensagemCadastro.textContent =
                "Você precisa aceitar os termos.";

            formularioValido = false;
        }


        // ==========================
        // CADASTRO
        // ==========================

        if (formularioValido) {

            const usuario = {

                nome: nome,

                email: email,

                senha: senha

            };


            localStorage.setItem(
                "usuarioCadastrado",
                JSON.stringify(usuario)
            );


            mensagemCadastro.style.color =
                "#2e7d32";

            mensagemCadastro.textContent =
                "Conta criada com sucesso!";


            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1000);

        }

    }
);


function limparErros() {

    document.getElementById(
        "erro-nome"
    ).textContent = "";


    document.getElementById(
        "erro-email"
    ).textContent = "";


    document.getElementById(
        "erro-senha"
    ).textContent = "";


    document.getElementById(
        "erro-confirmar-senha"
    ).textContent = "";


    mensagemCadastro.textContent = "";

}