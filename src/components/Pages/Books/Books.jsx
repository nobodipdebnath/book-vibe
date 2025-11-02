import React, { useEffect, useState } from "react";
import { Book } from "../Book/Book";

export const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="py-[100px]">
      <h1 className="text-center text-[40px] text-primary1 font-bold">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {books.map((book) => (
        <Book key={book.bookId} book={book}></Book>
      ))}
      </div>
    </div>
  );
};
