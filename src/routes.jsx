import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Article from "./pages/article/Article";
import Books from "./pages/books/Books";
import { Children } from "react";
import ArticleDetail from "./pages/article/ArticleDetail";
import Contact from "./pages/contact/Contact";
// import Shopping from "./pages/shopping/Shopping";
// import Profile from "./pages/profile/Profile";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/article", element: <Article /> },
  { path: "/books", element: <Books /> },
  { path: "/contact", element: <Contact /> },
  { path: "/article/:id", element: <ArticleDetail /> },
  // { path: "/shopping", element: <Shopping /> },
  // { path: "/profile", element: <Profile /> },
];

export default routes;
