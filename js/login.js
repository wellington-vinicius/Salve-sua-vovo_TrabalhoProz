// =============================
// ELEMENTOS DA TELA
// =============================

const formularioLogin =
    document.getElementById("form-login");

const campoEmail =
    document.getElementById("email-login");

const campoSenha =
    document.getElementById("senha-login");

const mensagemLogin =
    document.getElementById("mensagem-login");

const botaoMostrarSenha =
    document.getElementById("botao-mostrar-senha");

const botaoCriarConta =
    document.getElementById("botao-criar-conta");

function funcao1() {
    alert("Login realizado com sucesso!");
}


// =============================
// MOSTRAR OU ESCONDER SENHA
// =============================

botaoMostrarSenha.addEventListener(
    "click",
    function () {

        if (campoSenha.type === "password") {

            campoSenha.type = "text";

            botaoMostrarSenha.textContent = "🙈";

        } else {

            campoSenha.type = "password";

            botaoMostrarSenha.textContent = "👁";

        }

    }
);


// =============================
// LOGIN
// =============================

formularioLogin.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const email = campoEmail.value.trim();

        const senha = campoSenha.value.trim();


        const usuarioSalvo =
            JSON.parse(localStorage.getItem("usuarioCadastrado"));

        const emailCorreto = usuarioSalvo
            ? usuarioSalvo.email
            : "";

        const senhaCorreta = usuarioSalvo
            ? usuarioSalvo.senha
            : "";


        if (
            email === emailCorreto &&
            senha === senhaCorreta
        ) {

            localStorage.setItem("usuarioLogado", "true");

            funcao1();

            mensagemLogin.style.color =
                "#2e7d32";

            mensagemLogin.textContent =
                "Login realizado com sucesso!";


            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 800);

        } else {

            mensagemLogin.style.color =
                "#c62828";

            mensagemLogin.textContent =
                "E-mail ou senha incorretos.";

        }

    }
);


// =============================
// CRIAR CONTA
// =============================

botaoCriarConta.addEventListener(
    "click",
    function () {
        window.location.href =
            "cadastro.html";

    }
);