import React from 'react';
import './OurProjects.css';

const ImageGallery = () => {
    return (
        <div className="text-center responsive-container">
            <div className='flex justify-center items-center  mb-2'>
                <div className="bg-gray-300 p-4 rounded-3xl mt-12">
                    <h2 className="text-4xl font-bold mb-0 border-b-4 border-gray-500 pb-2">Our Projects</h2>
                </div>
            </div>

            <div className="flex justify-center items-center responsive-gallery">
                <div className="flex bg-gray-200 p-8 responsive-width h-96 mt-10 rounded-3xl shadow-2xl">
                    {/* Image 1 */}
                    <img
                        src="/images/Project1.jpg"  // Replace with your image source
                        alt="Project 1"
                        className="border-yellow-500 responsive-image mr-2"
                    />

                    {/* Image 2 */}
                    <img
                        src="/images/Project2.jpg"
                        alt="Project 2"
                        className="border-yellow-500 responsive-image mr-2"
                    />

                    {/* Image 3 */}
                    <img
                        src="/images/Project3.jpg"
                        alt="Project 3"
                        className="border-yellow-500 responsive-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
