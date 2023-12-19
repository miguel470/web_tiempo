//EjercicioGordo: Crear un proyecto en vite que permita gestionar el estado metereologico de una ciudad a traves de la api
//openweathermap.org. El proyecto debe de cubir: dispondremos de un input centrado en la pantalla horizontalmente y un bton de buscar
//ciudad. Cuando escribamos una ciudad si existe mostrará los siguientes datos en una tarjeta o card, nombre ciudad, icono del tiempo, datos
//más relevantes con iconos, la busqueda de la ciudad por enter o hacer click del boton

import { electionImgTemp, electionImgTime } from "./eleccionTiempo";

const city = document.getElementById("buscador");
const apiKey = "introduce tu api key de la url de abajo";
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=${apiKey}`;
//

export const fetchTiempo = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log(url);
          throw new Error("Api invalida");
          return;
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const pintarTiempo = (element) => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=${apiKey}`;
  fetchTiempo(urlApi).then((time) => {
    const returnTime = {
      img: time.weather[0].main,
      temp: time.main.temp,
      humedad: time.main.humidity,
      viento: time.wind.speed,
      ciudad: time.name,
    };
    //contenedor PADRE
    const padre = document.querySelector(element);
    padre.innerHTML = "";
    // if (padre.hasChildNodes()) {
    //Imagen nublado,lluvia,sol,etc
    const divTime = document.createElement("div");
    padre.appendChild(divTime);
    const spanTime = document.createElement("span");
    spanTime.innerHTML = returnTime.ciudad;
    const imgTime = document.createElement("img");
    imgTime.width = 50;
    imgTime.src = electionImgTime(returnTime.img);
    divTime.appendChild(imgTime);
    divTime.appendChild(spanTime);

    //temp
    const divTemp = document.createElement("div");
    padre.appendChild(divTemp);
    const spanTemp = document.createElement("span");
    spanTemp.innerHTML = `${Math.round(returnTime.temp)}°C`;
    const imgTemp = document.createElement("img");
    imgTemp.width = 50;
    imgTemp.src = electionImgTemp(returnTime.temp);
    divTemp.appendChild(imgTemp);
    divTemp.appendChild(spanTemp);

    //humedad
    const divHum = document.createElement("div");
    padre.appendChild(divHum);
    const spanHum = document.createElement("span");
    spanHum.innerHTML = `${Math.round(returnTime.humedad)}%`;
    const imgHum = document.createElement("img");
    imgHum.width = 50;
    imgHum.src = "public/img/humedad.png";
    divHum.appendChild(imgHum);
    divHum.appendChild(spanHum);

    //viento
    const divViento = document.createElement("div");
    padre.appendChild(divViento);
    const spanViento = document.createElement("span");
    spanViento.innerHTML = `${returnTime.viento} km/h`;
    const imgViento = document.createElement("img");
    imgViento.width = 50;
    imgViento.src = "public/img/viento.png";
    divViento.appendChild(imgViento);
    divViento.appendChild(spanViento);
    // }
  });
};

// console.log(time.weather[0].main);
// const img = document.createElement("img");
// img.width = 50;
// img.src = arrayTiempo[1];
// const padre = document.querySelector(element);
// padre.appendChild(img);
