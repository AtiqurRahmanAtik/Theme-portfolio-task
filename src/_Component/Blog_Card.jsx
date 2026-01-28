import Image from "next/image";


const Blog_Card = ({ image, title, excerpt, span = 1 }) => {

    return (
        <>
          <div
      className={`row-span-${span} bg-[#121212] rounded-xl overflow-hidden flex flex-col`}
    >
      {/* Image */}
      <div className="h-48">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-400 uppercase">Photography</p>
        <h3 className="text-white font-semibold leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          {excerpt}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          • Posted by Darylh Clark
        </p>
      </div>
    </div>
            
        </>
    );
};

export default Blog_Card;