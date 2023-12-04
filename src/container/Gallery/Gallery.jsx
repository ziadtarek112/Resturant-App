import React, { useRef } from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort, BsArrowLeftRight } from 'react-icons/bs';
import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Gallery = () => {
  const gallerRef = useRef(null);
  const handleScroll = (direction)=>{
    if(direction==='left'){
      gallerRef.current.scrollLeft -= 300;
    }else{
      gallerRef.current.scrollLeft += 300;
    }
  }
  const galleryImages = [images.gallery01,images.gallery02,images.gallery04];
  return(
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita iure
        ab, temporibus enim eligendi sunt. Ea saepe provident facere nostrum
        numquam quo eligendi, omnis cumque itaque non doloremque quod
        consequuntur.
      </p>
      <button type="button" className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={gallerRef}>
        {galleryImages.map((image,index)=>(
          <div className="app__gallery-images_card flex__center" key={`gallery-image-${index+1}`}>
            <img src={image} alt="" />
            <BsInstagram className="gallery__image-icon"/>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>handleScroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>handleScroll('right')}/>
      </div>
    </div>
  </div>
)};

export default Gallery;
