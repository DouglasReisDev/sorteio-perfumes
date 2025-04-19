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
    { marca: "In the box", nome: "Homine optimum", categoria: "ENCONTRO" },
    { marca: "Nuancielo", nome: "Alpha", categoria: "VERSATIL" },
    { marca: "Nuancielo", nome: "Hills", categoria: "ENCONTRO" },
    { marca: "Brian peterson", nome: "xxx", categoria: "VERSATIL" },
    { marca: "Brian peterson", nome: "LIII", categoria: "FESTA" },
    { marca: "Azza parfums", nome: "Be intense", categoria: "VERSATIL" },
    { marca: "Thera Cosméticos", nome: "Volcano", categoria: "VERSATIL" },
    { marca: "Thera Cosméticos", nome: "Hazor", categoria: "ENCONTRO" },
    { marca: "Thera Cosméticos", nome: "Drago", categoria: "VERSATIL" },
    { marca: "Thera Cosméticos", nome: "Liber", categoria: "VERSATIL" },
    { marca: "Thera Cosméticos", nome: "Fadin", categoria: "VERSATIL" },
    { marca: "Thera Cosméticos", nome: "Hiero", categoria: "ENCONTRO" },
    { marca: "J.A", nome: "Brand maçã", categoria: "ENCONTRO" },
    { marca: "J.A", nome: "Decima", categoria: "VERSATIL" },
    { marca: "J.A", nome: "Imperial", categoria: "VERSATIL" },
    { marca: "Valentino Viegas", nome: "Acqua di Vale", categoria: "VERSATIL" },
    { marca: "Valentino Viegas", nome: "Royal for Glory", categoria: "FESTA" },
    { marca: "Vivant", nome: "l'home", categoria: "ENCONTRO" },
    { marca: "Vivant", nome: "l'home cologne", categoria: "VERSATIL" },
    { marca: "Vivant", nome: "l'home L'eau", categoria: "VERSATIL" },
    { marca: "Natura", nome: "Homem Essence", categoria: "VERSATIL" },
    { marca: "AL HARAMAIN", nome: "la Venture knight", categoria: "VERSATIL" },
    { marca: "Orientica", nome: "Xclusif  oud", categoria: "ENCONTRO" },
    { marca: "Riiffs", nome: "Avant Garde", categoria: "VERSATIL" },
    { marca: "Afnan", nome: "Modest une", categoria: "VERSATIL" },
    { marca: "Dior", nome: "Homme Sport", categoria: "VERSATIL" },
    { marca: "Dior", nome: "Homme intense", categoria: "ENCONTRO" },
    { marca: "Issey Miyake", nome: "L'eau dissey", categoria: "VERSATIL" },
    { marca: "Paco Rabanne", nome: "Invictus Intense", categoria: "VERSATIL" },
    { marca: "Le fans", nome: "Pérsia", categoria: "FESTA" },
    { marca: "Dior", nome: "Sauvage", categoria: "VERSATIL" },
    { marca: "Le fans", nome: "néroli", categoria: "VERSATIL" },
    { marca: "le fans", nome: "oud intense", categoria: "FESTA" },
    { marca: "In the box", nome: "altum magnis", categoria: "FESTA" },
    { marca: "In the box", nome: "códice Uno", categoria: "ENCONTRO" },
    { marca: "In the box", nome: "regnum Opus", categoria: "FESTA" },
    { marca: "Valentino Viegas", nome: "don Viegas", categoria: "FESTA" },
    { marca: "O.U.I", nome: "iconic 001", categoria: "VERSATIL" },
    { marca: "O.U.I", nome: "l'experience 706", categoria: "VERSATIL" },
    { marca: "Hugo Boss", nome: "Boss bottle edp", categoria: "ENCONTRO" },
    { marca: "Versace", nome: "Dylan blue", categoria: "VERSATIL" },
    { marca: "Mancera", nome: "cedrat boise intense", categoria: "VERSATIL" },
    { marca: "Chanel", nome: "Bleu edt", categoria: "VERSATIL" },
    { marca: "Dior", nome: "Homme intense", categoria: "ENCONTRO" },
    { marca: "Paco Rabanne", nome: "one million parfum", categoria: "FESTA" },
    { marca: "Jean Paul Gaultier", nome: "Le male le parfum", categoria: "ENCONTRO" },
    { marca: "Azza parfums", nome: "hype Man", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "Boise premium", categoria: "VERSATIL" },
    { marca: "azza parfums", nome: "imperialle", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "Mr boss", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "l'home Up", categoria: "ENCONTRO" },
    { marca: "Azza parfums", nome: "Lunnari", categoria: "ENCONTRO" },
    { marca: "In the box", nome: "Helix men", categoria: "FESTA" },
    { marca: "Carolina Herrera", nome: "212 men", categoria: "VERSATIL" },
    { marca: "Prada", nome: "L'Homme", categoria: "VERSATIL" },
    { marca: "parfuns de marly", nome: "Layton 6 dig", categoria: "ENCONTRO" },
    { marca: "Azza parfums", nome: "YourSelf", categoria: "VERSATIL" },
    { marca: "Armani", nome: "stronger with you", categoria: "FESTA" },
    { marca: "J.A", nome: "VERSATILITY", categoria: "VERSATIL" },
    { marca: "J.A", nome: "Sublime", categoria: "VERSATIL" },
    { marca: "Jean-Paul Gaultier", nome: "Le male le parfum", categoria: "ENCONTRO" },
    { marca: "Valentino Viegas", nome: "Le patron Intense", categoria: "ENCONTRO" },
    { marca: "J.A", nome: "Black Ghost", categoria: "FESTA" },
    { marca: "J.A", nome: "Divinity monkey", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "Audacity", categoria: "VERSATIL" },
    { marca: "J.A", nome: "Imaginacion", categoria: "VERSATIL" },
    { marca: "Carolina Herrera", nome: "212 vip Black", categoria: "VERSATIL" },
    { marca: "Carolina Herrera", nome: "Bad Boy Extreme", categoria: "FESTA" },
    { marca: "Armani", nome: "Armani Code EDT 2023", categoria: "VERSATIL" },
    { marca: "Jean Paul Gaultier", nome: "Scandal Absolu Pour Homme", categoria: "FESTA" },
    { marca: "Paco Rabanne", nome: "Invictus Parfum", categoria: "FESTA" },
    { marca: "Azza parfums", nome: "YourSelf le parfum", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "Boise premium", categoria: "VERSATIL" },
    { marca: "Azza parfums", nome: "Homme exclusif", categoria: "FESTA" },
    { marca: "Azza parfums", nome: "vibration", categoria: "VERSATIL" },
    { marca: "Afnan", nome: "9.A.M", categoria: "VERSATIL" },
    { marca: "In the box", nome: "Essenza Nobile", categoria: "VERSATIL" },
    { marca: "", nome: "Essenza Nobile", categoria: "VERSATIL" },
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
