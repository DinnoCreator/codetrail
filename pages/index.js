// import logo from "../images/image.png";
import Home from "@/components/Home";
import Head from 'next/head';
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>CodeTrail</title>
        <meta
          name='description'
          content='Start your career in teach with us.'
        />
      </Head>
        <Home/>
    </Fragment>
  );
};

export default HomePage;
