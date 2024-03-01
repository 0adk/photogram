import React from 'react'
import Comment from './Comment'

// Komponent CommentList renderuje listę komentarzy. Przyjmuje listę komentarzy jako props. Każdy komentarz jest renderowany za pomocą komponentu Comment.
const CommentList = ({ comments }) => {
  return (
    <div>
      <ul>
      {/* Wykorzystanie funkcji map() do iteracji przez listę komentarzy i renderowanie ich za pomocą komponentu Comment */}
      {/* Wykorzystanie warunku logicznego, aby sprawdzić, czy istnieją komentarze do wyrenderowania. Jeśli lista komentarzy jest pusta, nie renderujemy niczego. W przeciwnym razie iterujemy przez listę komentarzy i renderujemy każdy komentarz.*/}
        {comments && comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            avatar={comment.avatar}
            nickname={comment.nickname}
            content={comment.content}
          />
        ))}
      </ul>
    </div>
  )
}

export default CommentList
