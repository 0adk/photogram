import React, { useState } from "react";

// Komponent AddCommentForm służy do dodawania nowych komentarzy
const AddCommentForm = ({ user, onAddComment }) => {
  // Stan komponentu: comment - aktualny tekst komentarza, error - ewentualny błąd przy dodawaniu komentarza
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  // Obsługa zdarzenia wysłania formularza - dodanie nowego komentarza
  const handleSubmit = async (e) => {
    // Zapobieganie domyślnego zachowania formularza (przeładowania strony) po jego wysłaniu
    e.preventDefault();
    // Zabezpieczenie przed dodaniem pustego komentarza
    if (comment.length < 0) return;

    // Tworzenie obiektu nowego komentarza
    const newComment = {
      nickname: user.nickname,
      content: comment,
      avatar: user.avatar,
    };
    try {
      // Wysłanie nowego komentarza do serwera
      const response = await fetch(
        "https://my-json-server.typicode.com/0adk/json-server-photogram",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
      // Obsługa odpowiedzi z serwera
      if (!response.ok) {
        throw new Error("Błąd przy dodawaniu komentarza");
      } else {
        // Aktualizacja listy komentarzy po dodaniu nowego komentarza
        onAddComment();
        // Zresetowanie pola komentarza textarea po dodaniu komentarza
        setComment("");
      }
    } catch (error) {
      // Aktualizacja stanu błędu
      setError(error.message);
    }
  };

  // Obsługa zdarzenia wciśnięcia klawisza Enter w polu komentarza
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Wywołanie funkcji wysyłania komentarza do serwera
      handleSubmit(e);
      // Ustawienie wysokości textarea na auto po wysłaniu komentarza
      e.target.style.height = "auto";
    }
  };

  // Obsługa zmiany zawartości pola komentarza
  const handleChange = (e) => {
    setComment(e.target.value);
    // Ustawienie wysokości textarea na auto, aby dopasować się do treści komentarza
    e.target.style.height = "auto";
    // Ustawienie wysokości textarea na wysokość wprowadzonego tekstu do momentu uzyskania przez input 200px
    if (e.target.scrollHeight < 200) {
      e.target.style.height = `${e.target.scrollHeight}px`;
    } else {
      e.target.style.height = "200px";
    }
    // Resetowanie stanu błędu po wyczyszczeniu pola
    if (e.target.value === "") {
      setError("");
    }
  };

  // Renderowanie formularza dodawania komentarza
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <img src={user.avatar} alt="Avatar" className="avatar" />

        <div className="form-input">
          {/* Pole tekstowe do wprowadzania treści komentarza */}
          <textarea
            id="comment"
            value={comment}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            required
            placeholder="Wpisz treść komentarza"
            style={{ resize: "none", borderColor: error ? "red" : "" }}
          ></textarea>
          {/* Wykorzystanie warunku logicznego, aby sprawdzić, czy istnieją błąd. Jesli tak - wyświetlanie błędu przy dodawaniu komentarza */}
          {error && <span className="error">{error}</span>}
        </div>
      </div>
    </form>
  );
};

export default AddCommentForm;
