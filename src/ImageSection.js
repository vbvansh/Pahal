import React from 'react';

const ImageSection = () => {
  return (
    <div className="relative text-center mt-4">
      {/* Image */}
      <img
        src="/images/pahal iiitn image.png"
        alt="PAHAL IIITN"
        className="mx-auto mb-4 max-w-80vw relative mt-10 shadow-4xl rounded-3xl" // Set max-width to 80% of viewport width and relative positioning
        style={{ width: '80%' }} // Set width to 80% for non-responsive fallback
      />
     
      {/* <h2 className="text-black text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        PAHAL IIIT NAGPUR
      </h2> */}
    </div>
  );
};

export default ImageSection;
