import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../NavBar";
import Hero from "./Hero";
import SecondComponent from "./SecondComponent";

export default () => {
  return (
    <>
      <Helmet>
        ‍<title>WorkPey</title>‍
        <meta
          name="description"
          content=""
        />{" "}
      </Helmet>
      <Hero />
      <SecondComponent />
    </>
  );
};
