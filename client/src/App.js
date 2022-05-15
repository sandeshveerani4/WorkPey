import React, { useEffect } from "react";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form";

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
