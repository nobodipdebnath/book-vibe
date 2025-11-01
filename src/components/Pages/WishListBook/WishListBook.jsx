import React from 'react'

export const WishListBook = ({book}) => {
    console.log(book);
  return (
    <div>
        <h1>WishList {book.length}</h1>
    </div>
  )
}
