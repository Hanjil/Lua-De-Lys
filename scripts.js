window.onload = carregarTexto;

let NomeAntigo;
let ArquivoAtual;

let Body = document.querySelector('body');
function Troca(Valor) {
    Body.className = Valor;
}

function Att() {
    let Nome = document.getElementById("Nome").value || "Lynn";

    const paragrafos = document.querySelectorAll("p");
    paragrafos.forEach(paragrafo => {
        paragrafo.innerText = paragrafo.innerText.replace(NomeAntigo, Nome);
    });
    
    NomeAntigo = Nome;
}

async function trocarTexto(arquivo) {
    try {
        const response = await fetch(arquivo);
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo');
        }
        const texto = await response.text();
        document.getElementById('Fanfic').innerHTML = texto;
    } catch (error) {
        console.error('Erro:', error);
    }
    NomeAntigo = "Lynn";
    Att();
}

async function carregarTexto() {
    try {
        const response = await fetch('Neu.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo');
        }
        const texto = await response.text();
        document.getElementById('Fanfic').innerHTML = texto;
    } catch (error) {
        console.error('Erro:', error);
    }
}

const DropDowns = document.querySelectorAll('.DropDown');

DropDowns.forEach(DropDown => {
    const Select = DropDown.querySelector('.Select');
    const Caret = DropDown.querySelector('.Caret');
    const Menu = DropDown.querySelector('.Menu');

    Select.addEventListener('click', () => {
        DropDowns.forEach(DD => {
            if (DD !== DropDown) {
                DD.querySelector('.Caret').classList.remove('Caret-Rotate');
                DD.querySelector('.Menu').classList.remove('Menu-Open');
            }
        });

        Caret.classList.toggle('Caret-Rotate');
        Menu.classList.toggle('Menu-Open');
    });
});

function FontSize() {

}