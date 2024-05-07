import { useCallback, useEffect, useState } from "react";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = ['https://i.ibb.co/P5HFym8/nu-2.jpg','https://i.ibb.co/1ZN29tL/nu-3.jpg','https://i.ibb.co/W0wYp9Z/nu-4.jpg','https://i.ibb.co/0CpYyMr/nu-1.webp','https://i.ibb.co/VxHDDQ5/nu-6.jpg'];
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
        {/* arrow left */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
  );
};
