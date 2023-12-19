const arrayTiempo = [
  "public/img/soleado.png", //soleado
  "public/img/nublado.png", //nublado
  "public/img/lluvia.png", //llueve mucho
  "public/img/chispeando.png", //chispeando
  "public/img/nieve.png", //nieve
];

const arrayTerm = ["public/img/termCalor.png", "public/img/termFrio.jpg"];

export function electionImgTime(optionTime) {
  let img;
  if (optionTime === "Clear") {
    img = arrayTiempo[0];
  }
  if (optionTime === "Clouds") {
    img = arrayTiempo[1];
  }
  if (optionTime === "Rain") {
    img = arrayTiempo[2];
  }
  // if(optionTime==="rain"){
  //     img = arrayTiempo[3]
  // }
  if (optionTime === "Snow") {
    img = arrayTiempo[4];
  }
  console.log(optionTime);
  return img;
}

export function electionImgTemp(option) {
  let img;
  if (option > 15) {
    img = arrayTerm[0];
  } else {
    img = arrayTerm[1];
  }
  console.log(option);
  return img;
}
