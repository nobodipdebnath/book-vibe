import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  const {author, bookName, category, review
, image, publisher, rating, tags, totalPages, yearOfPublishing} = singleBook;

  console.log(singleBook);

  const handelMarkAsRead = (id) => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true,
    });
    // store with id
    // where to store
    // array or collection
    // if book already exist then show a alert
    // if book not exist then push in the collection or array
    addToStoreDB(id);
  };
  return (
    <div className="container mx-auto mb-25">
      <div className="grid grid-cols-2 gap-12">
        <div className="p-18 flex justify-center items-center  bg-gray-100 rounded-2xl">
          <img className="h-[80%]" src={image} alt={bookName} />
        </div>
        <div>
          <h1 className="font-bold text-[40px] text-primary1">{bookName}</h1>
          <p className="text-base text-[#131313cc] font-normal my-1">By : {author}</p>
          <div className="divider"></div>
          <p className="my-3 text-[#131313cc] text-base font-medium">{category}</p>
          <div className="divider"></div>
          <p className="text-sm font-light text-[#131313B3]"><span className=" font-bold text-[#131313]">Review :</span> {review}</p>
          <div className="flex items-center gap-6 my-7">
            <p className="text-base font-semibold text-[#131313]">Tag</p>
            <p className="py-2 px-5 rounded-full text-[#23BE0A] bg-[#23BE0A0D]">#{tags[0]}</p>
            <p className="py-2 px-5 rounded-full text-[#23BE0A] bg-[#23BE0A0D]">#{tags[1]}</p>
          </div>
          <div className="my-6 flex items-center gap-15">
            <div className="text-[#131313b3] text-base flex flex-col gap-3">
              <p>Number of pages: </p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="text-[#131313] font-semibold text-base flex flex-col gap-3">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="divider"></div>
            <div className="flex gap-6 items-center">
              <button onClick={() => handelMarkAsRead(id)} className="py-3 px-10 border rounded-xl font-semibold text-lg border-[#1313134D] hover:text-white hover:bg-[#50B1C9] duration-500 cursor-pointer">{" "}Read </button>
              <button  className="py-3 px-10 border rounded-xl font-semibold text-lg border-[#1313134D] hover:text-white hover:bg-[#50B1C9] duration-500 cursor-pointer">WishList</button>
            </div>
        </div>
      </div>
    </div>
  );
};
