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