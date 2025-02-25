let imagesElements = document.getElementsByTagName("img");
let iElement = document.getElementById("icone-zap");

// para cada imagem, adiciona um evento de clique
for (let i = 0; i < imagesElements.length; i++) {
  imagesElements[i].addEventListener("click", function () {
    alert("Deus lhe abençoe!");
  });
}
// alerta ao clicar no icone
iElement.addEventListener("click", function () {
  alert("Deus lhe abençoe!");
});
