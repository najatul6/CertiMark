import { useState } from 'react'
import image1 from '../../assets/gallery/1.jpg'
import image2 from '../../assets/gallery/2.jpg'
import image3 from '../../assets/gallery/3.jpg'
import image4 from '../../assets/gallery/4.jpg'
import image5 from '../../assets/gallery/5.jpg'
import image6 from '../../assets/gallery/7.jpg'

const images = [

  {
    src: `${image1}`,
    alt: "Photo by Najatul islam",
  },
  {
    src: `${image2}`,
    alt: "Photo by Najatul islam",
  },
  {
    src: `${image3}`,
    alt: "Photo by Najatul islam",
  },
  {
    src: `${image4}`,
    alt: "Photo by Najatul islam",
  },
  {
    src: `${image5}`,
    alt: "Photo by Najatul islam",
  },
  {
    src: `${image6}`,
    alt: "Photo by Najatul islam",
  },


];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="gradient-background h-full py-4 sm:py-8 lg:py-9">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-lightTeal py-2 lg:text-4xl text-center block">
            Gallery
          </h2>
          <hr className="w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative flex h-48 items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg ${index === 1 || index === 2 || index === 5 ? "md:col-span-2 md:h-96" : "md:h-96"
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute cursor-pointer inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-10000 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white text-2xl font-bold text-black hover:bg-red-500 hover:text-white"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-screen w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
