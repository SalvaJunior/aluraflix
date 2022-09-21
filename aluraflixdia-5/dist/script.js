var listaLinks = [];
var listaFilmess = [];
var textofilme = "Lala";

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var linkFilme = document.getElementById("titulo_filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listaLinks.push(filmeFavorito);

    listaFilmess.push(linkFilme);
    listarFilmesNaTela();
    console.log(listaFilmess);
  } else {
    console.error("Não é imagem!");
    alert("Hey, is nescessarie .jpg url!! ;) ");
  }
  document.getElementById("filme").value = "";
  document.getElementById("titulo_filme").value = "";
}

function listarFilmesNaTela() {
  var titulo = document.getElementById("titulo_filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");

  elementoListaFilmes.innerHTML = "";
  for (var i = 0; i < listaFilmess.length; i++) {
    textofilme = listaFilmess[i];

    var meu_string = textofilme;
    var elementoFilmeFavorito =
      "<a><img src=" +
      listaLinks[i] +
      ">  <p>" +
      String(textofilme) +
      "</p><button onClick='removerFilme(" +
      i +
      ")' id='botaoremover'> Remove Movie</button> </a>";
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
  }
}

function removerFilme(indice) {
  console.log(indice);

  listaFilmess.splice(indice, 1);
  listaLinks.splice(indice, 1);

  listarFilmesNaTela();
}