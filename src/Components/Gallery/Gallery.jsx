const images = [
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/000/372/625/small/w8vr_ucs4_151006.jpg",
    alt: "Photo by Minh Pham",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUy3BcT38EuHErEYEYq5ueQLTTD7pi2o4zbucVabLj19ABoYZRpy2J5nBcoGvz_gtbes&usqp=CAU",
    alt: "Photo by Magicle",
  },
  {
    src: "https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/TkNf0G6PAFVBEujGEgaqI/7b2509e39db8c564038873f564cc33eb/Classroom_StudentGroup_Studying_Indoor_GettyImages-670415178.jpeg?fit=thumb",
    alt: "Photo by Martin Sanchez",
  },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/002/378/259/small/group-of-cheerful-students-free-vector.jpg",
    alt: "Photo by Lorenzo Herrera",
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
