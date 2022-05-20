import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from './Posts/Posts';
import Form from '../Form';
export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="block lg:flex w-100">
      <div className="relative container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Posts />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};
