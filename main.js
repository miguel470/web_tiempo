import { fetchTiempo, pintarTiempo } from "./components/fetchTiempo";

// document.getElementById("ciudad")

document.getElementById("buscar").addEventListener("click", () => {
  pintarTiempo(".card-body");
});
