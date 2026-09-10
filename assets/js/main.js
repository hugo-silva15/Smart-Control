let nome = prompt("Qual é o seu nome: ");
let sobrenome = prompt("Qual é o seu sobrenome: ");

let date = new Date();
let dia = date.getDate();
let mes = date.getMonth();
let horas = date.getHours();
let minutos = date.getMinutes();
const dias_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
setInterval(function()  {
    let date = new Date();
    const fuso_horario = date.getTimezoneOffset() / 60;
    let minutos = date.getMinutes().toString().padStart(2, '0');
    let horas = date.getHours().toString().padStart(2, '0');
    let dataAtual = `${dias_semana[date.getDay()]}, ${date.toLocaleDateString()} - ${horas}:${minutos} (-${fuso_horario}:00)`;
    let bem_vindo = document.getElementById("boas-vindas");
    bem_vindo.textContent = `Olá ${nome} ${sobrenome}! Hoje é ${dataAtual}`;
}, 1000);



const btnTema = document.querySelector("#btnTema");
btnTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");
});


















const checkboxAdicionar = document.getElementById('adicionar');
const checkboxRemover = document.getElementById('remover');

const fecharModalAdicionar = () => {
    checkboxAdicionar.checked = false;
};

const fecharModalRemover = () => {
    checkboxRemover.checked = false;
};

function validarCampos(modalTipo) {
    const inputs = document.querySelectorAll(modalTipo === 'adicionar' ? '.input-adicionar' : '.input-remover');

    return Array.from(inputs).every((input) => {
        const valor = input.value.trim();
        return valor !== '';
    });
}

document.getElementById('btnCadastrarDispositivo')?.addEventListener('click', () => {
    if (!validarCampos('adicionar')) {
        alert('Preencha nome e cômodo do dispositivo antes de cadastrar.');
        return;
    }

    fecharModalAdicionar();
});

document.getElementById('btnRemoverDispositivo')?.addEventListener('click', () => {
    if (!validarCampos('remover')) {
        alert('Preencha nome e cômodo do dispositivo antes de remover.');
        return;
    }

    fecharModalRemover();
});

document.querySelectorAll('.fechar').forEach((botaoFechar) => {
    botaoFechar.addEventListener('click', () => {
        const alvo = botaoFechar.dataset.fechar;

        if (alvo === 'adicionar') {
            fecharModalAdicionar();
        }

        if (alvo === 'remover') {
            fecharModalRemover();
        }
    });
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            const aberto = modal.classList.contains('modal-adicionar');
            if (aberto) {
                fecharModalAdicionar();
            } else {
                fecharModalRemover();
            }
        }
    });
});














const campoBusca = document.querySelector("#campoBusca");
const linhas = document.querySelectorAll("tbody tr");
campoBusca.addEventListener("input", function () {
    const textoDigitado = campoBusca.value.toLowerCase();
    linhas.forEach(function (linha) {
        const textoDaLinha = linha.textContent.toLowerCase();
        if (textoDaLinha.includes(textoDigitado)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
});


