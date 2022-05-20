import React from "react";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login isLogin={true} />} />
      <Route path="/signup" element={<Login isLogin={false} />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;

/* import { useDispatch } from "react-redux";
export default function Example() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="block lg:flex w-100">
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Posts />
      </div>
      <div >
        <Form />
      </div>
    </div>
  );
} */
