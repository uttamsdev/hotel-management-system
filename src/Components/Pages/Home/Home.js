import React from "react";
import Facilities from "./Facilities";
import Rooms from "./Rooms";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";
import Banner from "./Banner";
import Events from "./Events";
import ResturantAndBar from "./ResturantAndBar";
import Foods from "./Foods";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Facilities></Facilities>
      <Rooms></Rooms>
      <Events></Events>
      <Foods />
      <ResturantAndBar></ResturantAndBar>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
