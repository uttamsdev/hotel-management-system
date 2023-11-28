import React from "react";
import Facilities from "./Facilities";
import Rooms from "./Rooms";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Facilities></Facilities>
      <Rooms></Rooms>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
