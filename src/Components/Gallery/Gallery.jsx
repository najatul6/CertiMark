import image1 from '../../assets/gallery/1.HEIC'
import image2 from '../../assets/gallery/2.HEIC'
import image3 from '../../assets/gallery/3.HEIC'
import image4 from '../../assets/gallery/4.HEIC'
import image5 from '../../assets/gallery/5.HEIC'
import image6 from '../../assets/gallery/6.HEIC'
import image7 from '../../assets/gallery/7.HEIC'
import image8 from '../../assets/gallery/8.HEIC'
import image9 from '../../assets/gallery/9.HEIC'
import image10 from '../../assets/gallery/10.HEIC'

const images = [
  {
    src: `${image1}`,
    alt: "Photo by Najatul islam",
  },
  
];

const Gallery = () => {
  return (
    <div className="gradient-background h-full py-4 sm:py-8 lg:py-9">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className=" mb-4">
          <h2 className="text-2xl font-bold text-lightTeal py-2 lg:text-4xl text-center block">
            Gallery
          </h2>
          <hr className="w-full" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <div
              
              key={index}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${
                index === 1 || index === 2 ? "md:col-span-2 md:h-80" : "md:h-80"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
