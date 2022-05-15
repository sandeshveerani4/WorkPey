import React, { useState } from "react";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <div className="px-8 py-12 h-screen bg-gray-100 m-z">
      <h1 className="font-bold text-2xl text-center m-3">Create Memory</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="creator"
          >
            Creator
          </label>
          <input
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="creator"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            value={postData.creator}
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <input
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="message"
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            value={postData.message}
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            id="tags"
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            value={postData.tags}
          />
        </div>
        <div className="m-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="m-4">
          <input
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
            id="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
