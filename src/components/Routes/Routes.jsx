import { createBrowserRouter } from "react-router";
import { Root } from '../Pages/Root/Root';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';
import { Home } from '../Pages/Home/Home';
import { About } from '../Pages/About/About';
import { BookDetails } from '../Pages/BookDetails/BookDetails';
import { ReadList } from "../Pages/ReadList/ReadList";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true, 
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/readList',
            loader: () => fetch('bookData.json'),
            Component: ReadList
        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('bookData.json'),
            Component: BookDetails
        },
        {
            path: 'login',
            Component:Login
        },
        {
            path: 'signup',
            Component: Signup
        }
    ]
    
  },
]);
