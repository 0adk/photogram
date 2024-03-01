import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// "złapanie" elementów w drzewie DOM
const likeIcons = document.querySelectorAll(".like");
const counters = document.querySelectorAll("#likes-counter");

// iteracja po elementach i wykonanie zdarzeń - klik, dodanie klasy, użycie funkcji zmiany wartości counter'a
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", () => {
    let value = counters[i].innerHTML;
    if (likeIcons[i].classList.contains("active")) {
      likeIcons[i].classList.remove("active");
      handleLikesCounter(value, counters[i], "sub");
    } else {
      likeIcons[i].classList.add("active");
      handleLikesCounter(value, counters[i], "add");
    }
  });
}

// wydzielenie funkcji do dodawania like'ów
const handleLikesCounter = (number, element, action) => {
  if (action === "add") {
    number = +number + 1;
  } else if (action === "sub") {
    number = +number - 1;
  }
  element.innerHTML = number;
};

// Metoda ReactDOM.createRoot() tworzy kontener aplikacji React, który jest używany do renderowania aplikacji do elementu docelowego w drzewie DOM. Kontener aplikacji jest renderowany do elementu o identyfikatorze "root" w pliku HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Komponent React.StrictMode jest używany w celu wykrywania potencjalnych problemów w aplikacji i ostrzegania o nich w konsoli przeglądarki.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
