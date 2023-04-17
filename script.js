// Primeira - titulo h1 com id adicionados
const cabecalho = document.querySelector('#cabecalho');
const tituloH1 = document.createElement('h1');
cabecalho.append(tituloH1);

tituloH1.innerText = 'Paleta de Cores';
tituloH1.id = 'title';

// Criando paleta de cores
const principal = document.querySelector('#principal');
const paletaDeCores = document.createElement('section');
principal.appendChild(paletaDeCores);
paletaDeCores.id = 'color-palette';
paletaDeCores.style.display = 'flex';

const criaPaleta = (parametro) => {
    for (let index = 0; index < parametro; index += 1) {
        const pai = document.querySelector('#color-palette');
        const cor = document.createElement('div');
        pai.appendChild(cor);
        cor.className = 'color';
        cor.style.height = '50px';
        cor.style.width = '50px';
        cor.style.border = '1px solid black';
        cor.style.margin = '5px';
    }
    const primeiraCorPreta = document.querySelectorAll('.color')[0];
    primeiraCorPreta.style.background = 'black'
}
criaPaleta(4)

const geraCores = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

const adicionaCores = () => {
    let itensPintados = document.querySelectorAll('.color');
    for (let index = 1; index < itensPintados.length; index += 1) {
        itensPintados[index].style.backgroundColor = geraCores()
    }

}

const verificaCoresRepetidas = () => {
    if ( document.querySelector('.color') === document.querySelector('.color').nextSibling.style.backgroundColor) {
        document.querySelector('.color').nextSibling.style.backgroundColor = geraCores()
    }
}
verificaCoresRepetidas();

const barraDeNavegacao = document.createElement('nav');
const botaoAdicionaCores = document.createElement('button');
botaoAdicionaCores.id = 'button-random-color';
barraDeNavegacao.appendChild(botaoAdicionaCores);
principal.appendChild(barraDeNavegacao);

botaoAdicionaCores.innerText = 'Cores aleatórias';

botaoAdicionaCores.addEventListener('click', adicionaCores)

