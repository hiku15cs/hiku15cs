import { FC, MouseEvent, useEffect } from "react";

type ImageModalProps = {
  imageSrc: string;
  onClose: () => void;
};

const ProfileImageModal: FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
  // Disable scroll
  document.body.style.overflow = "hidden";

  return () => {
    // Re-enable scroll when modal closes
    document.body.style.overflow = "auto";
  };
}, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-lg w-full"
        onClick={handleContentClick}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt="Full View"
          className="w-full h-auto rounded"
        />

        {/* Download Button */}
        <a
          href={imageSrc}
          download
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default ProfileImageModal;