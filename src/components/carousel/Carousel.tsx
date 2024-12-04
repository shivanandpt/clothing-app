import { useEffect, useState } from 'react';
import './Carousel.css';
interface CarouselProps {
    images: [
        {
            id: number,
            image: string
        }
    ]
}

const Carousel: React.FC<CarouselProps> = ({
    images,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        
        return () => clearInterval(interval);
    },[]);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        )
    }
    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}>
                &#8249;
            </button>
            <div className="carousel-track" style={{
                transform: `translateX(-${currentIndex * 100}%)`,
            }}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={image.id}>
                        <img src={image.image} alt={`Slide ${image.id}`} />
                    </div>
                ))}

            </div>
            <button className="carousel-button next" onClick={handleNext}>
                &#8250;
            </button>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)} // Navigate to specific image
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
