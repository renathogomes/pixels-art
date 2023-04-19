
const criaCabecalho = () => {
    const cabecalho = document.querySelector('#cabecalho');
    const tituloH1 = document.createElement('h1');
    cabecalho.append(tituloH1);

    tituloH1.innerText = 'Paleta de Cores';
    tituloH1.id = 'title';
}

const criaSection = () => {
    const principal = document.querySelector('#principal');
    const paletaDeCores = document.createElement('section');
    principal.appendChild(paletaDeCores);
    paletaDeCores.id = 'color-palette';
    paletaDeCores.style.display = 'flex';
    paletaDeCores.style.height = '70px';
    paletaDeCores.style.width = '300px';
}

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
}

const geraCores = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

const adicionaCores = () => {
    let coresEmArray = [];
    let itensPintados = document.querySelectorAll('.color');
    for (let index = 0; index < itensPintados.length; index += 1) {
        for (let index2 = 0; index2 < itensPintados.length; index2 += 1) {
            if (index === 0) {
                itensPintados[index].style.backgroundColor = 'black'
            } else if (itensPintados[index].style.backgroundColor === itensPintados[index2].style.backgroundColor) {
                itensPintados[index].style.backgroundColor = geraCores();
                coresEmArray.push(itensPintados[index].style.backgroundColor = geraCores());
            }
        }
    }
}

const salvaPeloAmor = () => {
    // quem eu vou salvar?
    const vouSalvarEsse = document.querySelector('#color-palette');
    localStorage.setItem('colorPalette', vouSalvarEsse.innerHTML)
}

const criaBotão = () => {
    const barraDeNavegacao = document.createElement('nav');
    const botaoAdicionaCores = document.createElement('button');
    botaoAdicionaCores.id = 'button-random-color';
    barraDeNavegacao.appendChild(botaoAdicionaCores);
    principal.appendChild(barraDeNavegacao);

    botaoAdicionaCores.innerText = 'Cores aleatórias';
    botaoAdicionaCores.addEventListener('click', () => {
        adicionaCores();
        salvaPeloAmor();
    })


}

const criaTabela = (parametro) => {
    const quadroPixels = document.createElement('section');
    quadroPixels.id = 'pixel-board';
    const pai = document.querySelector('#principal');
    pai.appendChild(quadroPixels);
    for (let index = 0; index < parametro; index += 1) {
        const pixelsLinha = document.createElement('div');
        quadroPixels.appendChild(pixelsLinha);
        pixelsLinha.className = 'pixel-div';
        pixelsLinha.style.display = 'flex';
    }
}

const criaColunas = (parametro) => {
    for (let index = 0; index < parametro; index += 1) {
        const paiDasColunas = document.querySelectorAll('.pixel-div')[index]

        for (let i = 0; i < parametro; i += 1) {
            const colunas = document.createElement('div');
            paiDasColunas.appendChild(colunas);

            colunas.className = 'pixel';
            colunas.style.border = '1px solid black';
            colunas.style.width = '40px';
            colunas.style.height = '40px';
            colunas.style.backgroundColor = 'white';
        }
    }
}

const chamaStorage = () => {
    const chama = localStorage.getItem('colorPalette');
    const pai = document.querySelector('#color-palette');

    pai.innerHTML = chama;
}

const executaFuncioes = () => {
    criaCabecalho();
    criaSection();
    criaBotão();
    criaPaleta(4);
    adicionaCores();
    criaTabela(5);
    criaColunas(5)
}

window.onload = () => {
    executaFuncioes();

    if (localStorage.getItem('colorPalette')) {
        chamaStorage();
    }
}
