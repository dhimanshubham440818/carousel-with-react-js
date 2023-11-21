import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onChange = (index) => {
        // Handle change event
        setCurrentIndex(index);
        console.log("Carousel changed to index", index);
    };

    const onClickItem = (index) => {
        // Handle click on an item
        console.log("Clicked on item", index);
    };

    const onClickThumb = (index) => {
        // Handle click on a thumbnail
        console.log("Clicked on thumbnail", index);
    };

    return (
        <Carousel
            showArrows={true}
            autoPlay ={true}
            infiniteLoop={true}
            showThumbs={false}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            selectedItem={currentIndex}
        >
            <div>
                <img src="assets/a.jpeg" alt="Image 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/b.jpeg" alt="Image 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/c.jpeg" alt="Image 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
