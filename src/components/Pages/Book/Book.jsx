import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
export const Book = ({ book }) => {
//   console.log(book);
  const {bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="p-6 border  border-[#13131326] rounded-2xl flex flex-col gap-6">
        <div className="rounded-xl py-8 flex justify-center items-center lg:px-26 bg-gray-100">
          <img
          className=" object-cover hover:scale-120 h-[150px] duration-500 w-auto"
          src={image}
          alt={bookName}
        />
        </div>
        <div>
          <div className="flex items-center gap-6">
            <h3 className="text-[#23BE0A] font-semibold py-2 px-5 rounded-full bg-[#23BE0A0D]">{tags[0]}</h3>
            <h3 className="text-[#23BE0A] font-semibold py-2 px-5 rounded-full bg-[#23BE0A0D]">{tags[1]}</h3>
          </div>
          <h1 className="text-primary1 text-2xl font-bold my-4">{bookName}</h1>
          <h4 className="text-[#131313cc] text-base font-normal">By : {publisher}</h4>
          <div className="border border-dashed my-4 border-[#13131326]"></div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-medium text-[#131313cc]">{category}</h3>
            <h3 className="flex items-center gap-2 text-[#131313cc] text-base">
              {" "}
              <span>{rating}</span>
              <FaStar></FaStar>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
