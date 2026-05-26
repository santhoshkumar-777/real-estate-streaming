import React from 'react';

const ImageGallery = ({ image }) => {
  // Mocking multiple images from one
  const images = [
    image,
    "https://images.unsplash.com/photo-1600566752355-35792bed6a88?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
      <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
      </div>
      <div className="hidden md:block rounded-3xl overflow-hidden group">
        <img src={images[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
      </div>
      <div className="hidden md:block rounded-3xl overflow-hidden group">
        <img src={images[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
      </div>
      <div className="hidden md:block md:col-span-2 rounded-3xl overflow-hidden group relative">
        <img src={images[3]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
        <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl font-bold text-slate-900 shadow-xl hover:bg-white transition-all">
          View All Photos
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
