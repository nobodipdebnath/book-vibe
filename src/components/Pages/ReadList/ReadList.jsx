import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../../utility/addToDB";
import { Book } from "../Book/Book";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ReadListBook } from "../ReadListBook/ReadListBook";

export const ReadList = () => {
  // fokira system
  const [readList, setReadList] = useState([]);

  const data = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [data]);

  const handelSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPage);
    }
    if (type === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
  };

  return (
    <div>
      <div className="py-8 rounded-xl bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-primary1">Books</h1>
      </div>
      <div className="flex justify-center my-8">
        <div className="dropdown dropdown-center ">
          <div
            tabIndex={0}
            role="button"
            className="py-3 px-10 bg-[#23BE0A] rounded-lg font-semibold text-white flex items-center gap-2"
          >
            <span>Sort By : </span> {sort ? sort : ""}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handelSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handelSort("ratings")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className="border-[#1313134D]">
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col my-8 gap-6">
            {readList.map((book) => (
              <ReadListBook book={book} key={book.bookId}></ReadListBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-center text-5xl font-semibold py-10">Wish List Book</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};
