const perfumes = [
  { marca: "In the box", nome: "Codex supreme", categoria: "ENCONTRO" },
  { marca: "Valentino Viegas", nome: "Aventador", categoria: "VERSATIL" },
  { marca: "Valentino Viegas", nome: "Ocean pour homme", categoria: "VERSATIL" },
  { marca: "Sacratu", nome: "Aron", categoria: "VERSATIL" },
  { marca: "Sacratu", nome: "The Wild", categoria: "FESTA" },
  { marca: "Valentino Viegas", nome: "legend", categoria: "VERSATIL" },
  { marca: "Azza parfums", nome: "kato", categoria: "VERSATIL" },
  { marca: "In the box", nome: "the real commander", categoria: "FESTA" },
  { marca: "In the box", nome: "Tersus parfum", categoria: "VERSATIL" },
  { marca: "In the box", nome: "lemon vanilla e wood", categoria: "VERSATIL" },
  { marca: "In the box", nome: "códice dhoro", categoria: "ENCONTRO" },
  { marca: "In the box", nome: "dark water", categoria: "VERSATIL" },
  { marca: "AL HARAMAIN", nome: "la Venture knight", categoria: "VERSATIL" },
  { marca: "Orientica", nome: "Xclusif oud", categoria: "ENCONTRO" },
  { marca: "Riiffs", nome: "Avant Garde", categoria: "VERSATIL" },
  { marca: "Afnan", nome: "Modest une", categoria: "VERSATIL" },
  { marca: "Dior", nome: "Homme Sport", categoria: "VERSATIL" },
  { marca: "Dior", nome: "Homme intense", categoria: "ENCONTRO" },
];

function atualizarLista() {
  const lista = document.getElementById("listaPerfumes");
  lista.innerHTML = "";
  perfumes.forEach(perfume => {
    const div = document.createElement("div");
    div.className = "perfume-item";
    div.innerText = `${perfume.marca} - ${perfume.nome} (${perfume.categoria})`;
    lista.appendChild(div);
  });
}

function sortearCategoria(categoria) {
  const lista = document.getElementById("listaPerfumes");
  const resultado = document.getElementById("sorteioResultado");

  document.querySelectorAll('.perfume-item').forEach(item => item.classList.remove('highlight'));

  const filtrados = perfumes.filter(p => p.categoria.toLowerCase().trim() === categoria.toLowerCase().trim());

  if (filtrados.length > 0) {
    const sorteado = filtrados[Math.floor(Math.random() * filtrados.length)];
    resultado.innerText = `Sorteado: ${sorteado.marca} - ${sorteado.nome}`;

    const itensLista = document.querySelectorAll('.perfume-item');
    itensLista.forEach(item => {
      if (item.innerText.includes(sorteado.marca) && item.innerText.includes(sorteado.nome)) {
        item.classList.add('highlight');
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  } else {
    resultado.innerText = "Nenhum perfume encontrado nessa categoria.";
  }

  resultado.classList.remove("animated-result");
  void resultado.offsetWidth;
  resultado.classList.add("animated-result");
}

window.onload = atualizarLista;
