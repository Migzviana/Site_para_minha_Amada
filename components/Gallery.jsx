export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-xl"
        >
          <img
            src={img}
            alt="foto"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-white text-2xl">❤️</span>
          </div>
        </div>
      ))}
    </div>
  );
}