import { useState, useRef } from "react";

const Slider = ({ func }) => {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isSliding, setIsSliding] = useState(false); 
  const [thumbPosition, setThumbPosition] = useState(0); 
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = (e) => {
    setStartX(e.clientX || e.touches[0].clientX);
    setIsSliding(true);
    setIsClicked(false);
  };

  const handleMouseMove = (e) => {
    if (!isSliding) return;

    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX;

    const sliderWidth = sliderRef.current.offsetWidth;
    const newPosition = Math.max(0, Math.min(deltaX, sliderWidth * 0.85));
    setThumbPosition(newPosition);

    if (newPosition >= sliderWidth * 0.85) {
      setIsSliding(false);
      func();
    }
  };

  const handleMouseUp = () => {
    if (startX === null || thumbPosition === 0) {
      return;
    }
    setIsSliding(false);
  };

  return (
    <div
      ref={sliderRef}
      className="slider ghiwa"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div
        className="slider-thumb"
        style={{ left: `${thumbPosition}px` }}
      ></div>
    </div>
  );
};

export default Slider;