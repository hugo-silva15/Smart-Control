let nome = prompt("Qual é o seu nome: ");
let sobrenome = prompt("Qual é o seu sobrenome: ");

let date = new Date();
let dia = date.getDate();
let mes = date.getMonth();
let horas = date.getHours();
let minutos = date.getMinutes();
const dias_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
setInterval(() => {
    let date = new Date();
    const fuso_horario = date.getTimezoneOffset() / 60;
    let minutos = date.getMinutes();
    let horas = date.getHours();
    let dataAtual = `${dias_semana[date.getDay()]}, ${date.toLocaleDateString()} - ${horas}:${minutos} (-${fuso_horario}:00)`;
    let bem_vindo = document.getElementById("welcomae-message");
    bem_vindo.textContent = `Olá ${nome} ${sobrenome}! Hoje é ${dataAtual}`;
}, 1000);







// function mostrarBoasVindasSimples() {
//     let primeiro = prompt('Digite seu nome:') || '';
//     let sobrenome = prompt('Digite seu sobrenome:') || '';
//     let nome = (primeiro + ' ' + sobrenome).trim() || 'Usuário';
//     let d = new Date();
//     let dias = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
//     let diaSemana = dias[d.getDay()];
//     let dia = String(d.getDate()).padStart(2,'0');
//     let mes = String(d.getMonth() + 1).padStart(2,'0');
//     let ano = d.getFullYear();
//     let hora = String(d.getHours()).padStart(2,'0');
//     let minuto = String(d.getMinutes()).padStart(2,'0');
//     let offset = -d.getTimezoneOffset();
//     let sinal = offset >= 0 ? '+' : '-';
//     let oh = String(Math.floor(Math.abs(offset) / 60)).padStart(2,'0');
//     let om = String(Math.abs(offset) % 60).padStart(2,'0');
//     let dataAtual = `${diaSemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto} (${sinal}${oh}:${om})`;
//     let mensagem = `Olá, ${nome}! Hoje é ${dataAtual}`;
//     let el = document.getElementById('welcome-message');
//     if (el) el.textContent = mensagem;
//     else console.log(mensagem);
// }

// document.addEventListener('DOMContentLoaded', mostrarBoasVindasSimples);