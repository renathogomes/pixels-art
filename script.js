// Primeira - titulo h1 com id adicionados
const cabecalho = document.querySelector('#cabecalho');
const tituloH1 = document.createElement('h1');
cabecalho.appendChild(tituloH1);

tituloH1.innerText = 'Paleta de Cores';
tituloH1.id = 'title';

// Criando paleta de cores

const principal = document.querySelector('#principal');
const paletaDeCores = document.createElement('section');
principal.appendChild(paletaDeCores);
paletaDeCores.id = 'color-palette';

const cor1 = document.createElement('span');
const cor2 = document.createElement('span');
const cor3 = document.createElement('span');
const cor4 = document.createElement('span');

cor1.classList.add('color');
cor2.classList.add('color');
cor3.classList.add('color');
cor4.classList.add('color');

paletaDeCores.appendChild(cor1);
paletaDeCores.appendChild(cor2);
paletaDeCores.appendChild(cor3);
paletaDeCores.appendChild(cor4);

