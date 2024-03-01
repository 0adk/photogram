import React from 'react'

// Komponent Comment renderuje pojedynczy komentarz. Przyjmuje jako props: id - identyfikator komentarza, avatar - adres URL awatara użytkownika, nickname - nazwę użytkownika oraz content - treść komentarza.
const Comment = ({ id, avatar, nickname, content }) => {

  // Wykorzystanie przekazanych propsów (id, avatar, nickname, content) do dynamicznego renderowania informacji o użytkowniku i treści komentarza. 
  return (
    <li className="comment" id={id}>
      <img className="avatar" src={avatar} alt={nickname} />
      <div className="comment-content">
        <p className="nickname">{nickname}</p>
        <p>{content}</p>
      </div>
    </li>
  )
}

export default Comment
