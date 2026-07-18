import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { massageList } from "../dataBase";
import "./massageSlider.css";

const DRAG_THRESHOLD = 8;

const MassageSlider = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const isDragging = useRef(false);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = false;
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
        if (itemsRef.current) {
            const x = e.pageX - itemsRef.current.offsetLeft / 2;
            const walk = (x - startX) * 1;
            if (Math.abs(walk) > DRAG_THRESHOLD) {
                isDragging.current = true;
            }
            itemsRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchStart = (e) => {
        isDragging.current = false;
        setIsMouseDown(true);
        setStartX(e.touches[0].pageX - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isMouseDown) return;
        if (itemsRef.current) {
            const x = e.touches[0].pageX - itemsRef.current.offsetLeft / 2;
            const walk = (x - startX) * 1;
            if (Math.abs(walk) > DRAG_THRESHOLD) {
                isDragging.current = true;
            }
            itemsRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        setIsMouseDown(false);
    };

    const handleLinkClick = (e) => {
        if (isDragging.current) {
            e.preventDefault();
        }
    };

    return (
        <div
            className="sliderContainer"
            ref={itemsRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {massageList.map((slide) => (
                <Link
                    key={slide.linkName}
                    className="massageBlock"
                    to={`/massages/${slide.linkName}`}
                    onClick={handleLinkClick}
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
