import React from "react";
import Facilities from "./Facilities";
import Rooms from "./Rooms";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";
import Banner from "./Banner";
import Events from "./Events";
import ResturantAndBar from "./ResturantAndBar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Facilities></Facilities>
      <Events></Events>
      <Rooms></Rooms>
      <ResturantAndBar></ResturantAndBar>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
