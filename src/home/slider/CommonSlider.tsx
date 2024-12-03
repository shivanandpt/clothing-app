import React, { useState, useEffect } from "react";
import "./CommonSlider.css";

interface SliderItem {
    id: number;
    image?: string; // URL of the image
}

interface CommonSliderProps {
    items: SliderItem[];
}

const CommonSlider: React.FC<CommonSliderProps> = ({
    items,
}) => {

    return (
     
    );
};

export default CommonSlider;
