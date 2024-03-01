import React from "react";
import CommentSection from "./components/CommentSection";

// Komponent App jest głównym komponentem aplikacji, który renderuje całą aplikację.Wewnątrz tego komponentu znajduje się główny sekcja komentarzy, reprezentowana przez komponent CommentSection.
function App() {
  // Deklaracja stałej użytkownika (symulacja logowania) - obiekt zawierający (nickname i avatar)
  const user = {
    nickname: "alina_malina",
    avatar: "/photogram/images/avatars/av3.jpg",
  };

  // Dane użytkownika (nickname i avatar) są przekazywane jako props do komponentu CommentSection.
  return (
    <div className="App">
      <CommentSection user={user} />
    </div>
  );
}

export default App;
