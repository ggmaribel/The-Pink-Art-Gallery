import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h1 className="headtext">The <span class="pink">Pink</span> ART Gallery</h1>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container slide-track" ref={scrollRef}>
          {[
            images.gallery01, 
            images.gallery02, 
            images.gallery03, 
            images.gallery04,
            images.gallery05, 
            images.gallery06, 
            images.gallery07, 
            images.gallery08,
            images.gallery09,
            images.gallery10,
            images.gallery11,
            images.gallery12,
            images.gallery14,
            images.gallery15,
            images.gallery16,
            images.gallery17,
            images.gallery18,
            images.gallery19,
            images.gallery20,
            images.gallery21,
            images.gallery22,
            images.gallery23,
            images.gallery24,
            images.gallery25,
            images.gallery26,
            images.gallery27,
          ].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Header;