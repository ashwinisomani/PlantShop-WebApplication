import React, { useState } from "react";

import '../styles/Carousel.css'

function Carousel({items}) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const previousItem = () => {
        setCurrentItemIndex(currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1);
    }
    const nextItem = () => {
        setCurrentItemIndex(currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1);
    }

    return (
        <div className="carousel-container">
            <button className='previous-item' onClick={previousItem}>&lt;</button>
            <div className='current-item'>
                {
                    items.map((item, index) => {
                        return index===currentItemIndex? (
                            <img className="current-item-image" src={item.src} alt={item.alt}></img>
                        ): null;
                    })
                }
            </div>
            <button className='next-item' onClick={nextItem}>&gt;</button>
        </div>
      )
}

export default Carousel;