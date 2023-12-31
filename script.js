
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
        if (index === 0) {
            cor.className = 'color selected';
            cor.style.height = '50px';
            cor.style.width = '50px';
            cor.style.border = '1px solid black';
            cor.style.margin = '5px';
        } else {
            cor.className = 'color';
            cor.style.height = '50px';
            cor.style.width = '50px';
            cor.style.border = '1px solid black';
            cor.style.margin = '5px';
        }
    }
}

const tamanhoDoQuadro = (parametro) => {
    const tamanho = document.querySelector('#principal');
    const tamanhoHeader = document.querySelector('#cabecalho')
    const tamanhoCorpo = document.querySelector('#corpo')
    const converte = parametro * 50;
    tamanho.style.width = `${converte}px`
    tamanhoHeader.style.width = `${converte}px`
    tamanhoCorpo.style.width = `${converte}px`
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
                itensPintados[index].style.backgroundColor = 'rgb(0, 0, 0)';
            } else if (itensPintados[index].style.backgroundColor === itensPintados[index2].style.backgroundColor) {
                itensPintados[index].style.backgroundColor = geraCores();
                coresEmArray.push(itensPintados[index].style.backgroundColor = geraCores());
            }
        }
    }
}

const salvaPeloAmor = () => {
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

const criaLinhas = (parametro) => {
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

const selecionaCor = () => {
    const test = document.querySelector('#color-palette')
    test.addEventListener('click', (event) => {
        const selected = document.querySelector('.selected')
        if (selected) {
            selected.classList.remove('selected')
        }
        event.target.classList.add('selected');

    })
}

const corSelecionada = () => {
    const algumacoisa = document.querySelectorAll('.color')[0];
    if (algumacoisa.className === 'color') {
        algumacoisa.classList.remove('color')
    }
}

const botaoLimpa = () => {
    const btn = document.createElement('button');
    const elementoPai = document.querySelector('nav');
    elementoPai.appendChild(btn)
    btn.id = 'clear-board';
    btn.innerText = 'Limpar'

    btn.addEventListener('click', () => {
        const limpar = document.querySelectorAll('.pixel')
        for (let index = 0; index < limpar.length; index += 1) {
            limpar[index].style.backgroundColor = 'white';
        }
    })

}

const salvaArte = () => {
    const pixelSalvo = document.querySelector('#pixel-board')
    localStorage.setItem('pixelBoard', pixelSalvo.innerHTML)
}

const insereCores = () => {
    const pixels = document.querySelectorAll('.pixel-div .pixel')
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', () => {
            pixels[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor

            salvaArte()
        })
    }
}

const chamaArte = () => {
    const chamaAArte = localStorage.getItem('pixelBoard');
    const devolve = document.querySelector('#pixel-board')
    devolve.innerHTML = chamaAArte
}

const chamaArtePraValer = () => {
    if (localStorage.getItem('pixelBoard')) {
        chamaArte()
    } else {
        document.querySelector('#pixel-board')
    }
}

/* const btnNumero = () => {
    const bttn = document.createElement('button');
    const pai = document.querySelector('nav');
    const input = document.createElement('input')
    bttn.appendChild(input)
    pai.appendChild(bttn)

    bttn.innerText = 'Escolha um numero'

    input.id = 'escolheNumero';
    input.innerText = 'Escolha um Numero'
    input.style.width = '10px'

} */

const executaFuncioes = () => {
    criaCabecalho();
    criaSection();
    criaBotão();
    criaPaleta(4);
    adicionaCores();
    criaLinhas(5);
    criaColunas(5)
    selecionaCor()
    botaoLimpa()
/*     btnNumero() */
    chamaArtePraValer()
    tamanhoDoQuadro(5)
}

window.onload = () => {
    executaFuncioes();
    insereCores()

    if (localStorage.getItem('colorPalette')) {
        chamaStorage();
    }
}

