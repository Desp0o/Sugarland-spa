import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { massageList } from "../dataBase";
import "./massageSlider.css";

const MassageSlider = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsMouseDown(true);
        setStartX(e.pageX - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = (e) => {
        e.preventDefault();
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX) * 4; // Adjust scroll speed as needed
        itemsRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="sliderContainer"
            ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
        >
            {massageList.map((slide) => (
                <Link
                    key={slide.linkName}
                    className="massageBlock"
                    to={`/pages/massages/${slide.linkName}`}
                >
                    <img
                        className="massageBlock_cover"
                        src={slide.image}
                        alt="massage slider image"
                    />
                    <h2
                        className={
                            slide.name === "Ashiatsu barefoot massage" ||
                                slide.name === "Wood therapy massage" ||
                                slide.name === "Lymphatic drainage massage"
                                ? "sliderSwiperHeaderSmall"
                                : "sliderSwiperHeader"
                        }
                    >
                        {slide.name}
                    </h2>
                </Link>
            ))}
        </div>
    );
};

export default MassageSlider;
