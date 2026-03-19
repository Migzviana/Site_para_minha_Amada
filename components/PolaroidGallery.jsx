import PolaroidPhoto from "./PolaroidPhoto";

export default function PolaroidGallery({ photos }) {
  return (
    <div className="
      relative 
      flex 
      flex-wrap 
      justify-center 
      gap-6 
      mt-10
    ">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`
            ${i % 2 === 0 ? "mt-4" : "-mt-4"}
          `}
        >
          <PolaroidPhoto src={photo.src} caption={photo.caption} />
        </div>
      ))}
    </div>
  );
}