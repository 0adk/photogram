import React, { useEffect, useState } from "react";
import AddCommentForm from "./AddCommentForm";
import CommentList from "./CommentList";

// Komponent CommentSection służy wyświetlania wszystkich komentarzy wraz z formularzem
const CommentSection = ({ user }) => {
  // Stan komponentu: comments - aktualna lista komentarzy, error - ewentualny błąd przy pobieraniu komentarzy
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  // Funkcja asynchroniczna pobierająca komentarze z serwera
  const fetchComments = async () => {
    try {
      // Pobieranie komentarzy z serwera
      const response = await fetch(
        "https://my-json-server.typicode.com/0adk/json-server-photogram",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      // Obsługa odpowiedzi z serwera
      if (!response.ok) {
        throw new Error("Nie można pobrać komentarzy");
      }
      // Konwersja (parsowanie) odpowiedź serwera na listę komentarzy w formacie JSON
      const data = await response.json();
      // Aktualizacja stanu komentarzy
      setComments(data);
    } catch (error) {
      // Aktualizacja stanu błędu
      setError(error.message);
    }
  };

  // Wywołanie funkcji fetchComments() po pierwszym renderowaniu komponentu, aby pobrać komentarze z serwera
  useEffect(() => {
    fetchComments();
  }, []);

  // Wywołanie funkcji fetchComments() po dodaniu nowego komentarza, aby pobrać zaktualizowaną listę komentarzy o nowy komentarz
  const handleAddComment = () => {
    fetchComments();
  };

  // Renderowanie komponentu CommentSection: wyświetlanie listy komentarzy lub błędu oraz formularza dodawania komentarza
  return (
    <div className="comment-section">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <CommentList comments={comments} />
      )}
      <AddCommentForm user={user} onAddComment={handleAddComment} />
    </div>
  );
};

export default CommentSection;
