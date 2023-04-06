import Carousel from "../component/Carousel";
import Gallery1 from "../img/Gallery1.jpg";
import Gallery2 from "../img/Gallery2.jpg";
import Gallery3 from "../img/Gallery3.jpg";
import Gallery4 from "../img/Gallery4.jpg";
import Gallery5 from "../img/Gallery5.jpg";

import "../styles/Gallery.css";

const Gallery = () => {
  const galleryImages = [
    {src: Gallery1, alt: "Gallery1"},
    {src: Gallery2, alt: "Gallery2"},
    {src: Gallery3, alt: "Gallery3"},
    {src: Gallery4, alt: "Gallery4"},
    {src: Gallery5, alt: "Gallery5"}
  ]; 
  return (
    <div className="gallery-container">
      <div className="gallery-heading">
        <h1>GALLERY</h1>
      </div>
      <Carousel items={galleryImages}></Carousel>
    </div>
  )
};

export default Gallery;