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